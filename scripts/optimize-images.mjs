import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname } from 'path';

async function findImages(dir) {
  const results = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...await findImages(full));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) results.push(full);
  }
  return results;
}

const images = await findImages('public/images');
let saved = 0;
let count = 0;

for (const img of images) {
  const ext = extname(img).toLowerCase();
  const tmp = img + '.opt';

  try {
    const instance = sharp(img);
    if (ext === '.jpg' || ext === '.jpeg') {
      await instance.jpeg({ quality: 85, mozjpeg: true }).toFile(tmp);
    } else {
      await instance.png({ compressionLevel: 9, effort: 10 }).toFile(tmp);
    }

    const before = (await stat(img)).size;
    const after = (await stat(tmp)).size;

    if (after < before) {
      await rename(tmp, img);
      saved += before - after;
      count++;
      console.log(`  ${img}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
    } else {
      await unlink(tmp);
    }
  } catch (err) {
    console.error(`  Failed: ${img} — ${err.message}`);
    try { await unlink(tmp); } catch {}
  }
}

console.log(`\nOptimized ${count}/${images.length} images, saved ${(saved / 1024).toFixed(0)}KB`);
