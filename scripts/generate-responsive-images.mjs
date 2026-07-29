import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import {
  RESPONSIVE_WIDTHS,
  getVariantDir,
  getVariantFileName,
} from '../lib/responsive-image-config.mjs';

const SOURCE_EXT = /\.(webp|jpe?g|png)$/i;

async function findImages(dir) {
  const results = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === '.responsive') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...(await findImages(full)));
    else if (SOURCE_EXT.test(entry.name)) results.push(full);
  }
  return results;
}

const images = await findImages('public/images');
let generated = 0;
let skipped = 0;

for (const img of images) {
  const ext = extname(img);
  const base = basename(img, ext);
  const dir = dirname(img);
  const variantDir = getVariantDir(dir);

  const { width: originalWidth } = await sharp(img).metadata();
  if (!originalWidth) continue;

  const widths = RESPONSIVE_WIDTHS.filter((w) => w < originalWidth);
  if (widths.length === 0) continue;

  const sourceMtime = (await stat(img)).mtimeMs;
  if (!existsSync(variantDir)) await mkdir(variantDir, { recursive: true });

  for (const width of widths) {
    const outPath = join(variantDir, getVariantFileName(base, width, '.webp'));
    if (existsSync(outPath) && (await stat(outPath)).mtimeMs >= sourceMtime) {
      skipped++;
      continue;
    }
    await sharp(img).resize({ width }).webp({ quality: 80 }).toFile(outPath);
    generated++;
  }
}

console.log(`Generated ${generated} responsive variants (${skipped} up to date) from ${images.length} source images.`);
