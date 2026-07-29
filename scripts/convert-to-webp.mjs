#!/usr/bin/env node
/**
 * Convert all jpg/jpeg/png images under public/images to webp,
 * then rewrite references in content/**\/*.mdx to point at the new files.
 *
 * Usage:
 *   node scripts/convert-to-webp.mjs           convert + rewrite refs, delete originals
 *   node scripts/convert-to-webp.mjs --dry-run  show what would happen, no writes
 *   node scripts/convert-to-webp.mjs --keep     keep original jpg/png files
 */

import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");
const CONTENT_DIR = path.join(ROOT, "content");

const DRY_RUN = process.argv.includes("--dry-run");
const KEEP_ORIGINALS = process.argv.includes("--keep");
const QUALITY = 82;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function findMdxFiles(dir) {
  const all = await walk(dir);
  return all.filter((f) => f.endsWith(".mdx"));
}

function isConvertible(file) {
  return /\.(jpe?g|png)$/i.test(file);
}

async function convertImage(file) {
  const webpPath = file.replace(/\.(jpe?g|png)$/i, ".webp");
  if (DRY_RUN) {
    console.log(`[dry-run] convert: ${path.relative(ROOT, file)} -> ${path.relative(ROOT, webpPath)}`);
    return { original: file, webp: webpPath };
  }
  await sharp(file).webp({ quality: QUALITY }).toFile(webpPath);
  console.log(`converted: ${path.relative(ROOT, file)} -> ${path.relative(ROOT, webpPath)}`);
  return { original: file, webp: webpPath };
}

function refCandidates(basename) {
  // References in mdx may use the literal filename, a fully URL-encoded
  // form, or (as seen in this content) just spaces encoded as %20 with
  // other unicode characters left literal. Generate all three.
  return [
    basename,
    encodeURIComponent(basename).replace(/%2F/g, "/"),
    basename.replace(/ /g, "%20"),
  ];
}

async function rewriteReferences(mdxFiles, conversions) {
  for (const mdxFile of mdxFiles) {
    let text = await fs.readFile(mdxFile, "utf8");
    let changed = false;

    for (const { original, webp } of conversions) {
      const oldBase = path.basename(original);
      const newBase = path.basename(webp);
      const [literal, fullyEncoded, spaceEncoded] = refCandidates(oldBase);
      if (text.includes(literal)) {
        text = text.split(literal).join(newBase);
        changed = true;
      }
      if (text.includes(fullyEncoded)) {
        text = text.split(fullyEncoded).join(encodeURIComponent(newBase));
        changed = true;
      }
      if (text.includes(spaceEncoded)) {
        text = text.split(spaceEncoded).join(newBase.replace(/ /g, "%20"));
        changed = true;
      }
    }

    if (changed) {
      if (DRY_RUN) {
        console.log(`[dry-run] would update refs in: ${path.relative(ROOT, mdxFile)}`);
      } else {
        await fs.writeFile(mdxFile, text, "utf8");
        console.log(`updated refs: ${path.relative(ROOT, mdxFile)}`);
      }
    }
  }
}

async function deleteOriginals(conversions) {
  for (const { original } of conversions) {
    if (DRY_RUN) {
      console.log(`[dry-run] delete: ${path.relative(ROOT, original)}`);
    } else {
      await fs.unlink(original);
    }
  }
}

async function main() {
  const allFiles = await walk(IMAGES_DIR);
  const imageFiles = allFiles.filter(isConvertible);

  if (imageFiles.length === 0) {
    console.log("No jpg/jpeg/png images found under public/images.");
    return;
  }

  console.log(`Found ${imageFiles.length} image(s) to convert.`);

  const conversions = [];
  for (const file of imageFiles) {
    conversions.push(await convertImage(file));
  }

  const mdxFiles = await findMdxFiles(CONTENT_DIR);
  await rewriteReferences(mdxFiles, conversions);

  if (!KEEP_ORIGINALS) {
    await deleteOriginals(conversions);
  }

  console.log(DRY_RUN ? "\nDry run complete. No files were changed." : "\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
