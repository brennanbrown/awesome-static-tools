import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(process.cwd());
const srcSvg = path.join(root, 'assets', 'favicon.svg');
const outDir = path.join(root, 'assets');

const sizes = [16, 32, 48, 180];

async function ensure() {
  await fs.access(srcSvg).catch(() => { throw new Error(`Missing ${srcSvg}`); });
}

async function generate() {
  await ensure();
  const svg = await fs.readFile(srcSvg);
  for (const size of sizes) {
    const out = path.join(outDir, `favicon-${size}.png`);
    await sharp(svg)
      .resize(size, size, { fit: 'contain', background: { r:0, g:0, b:0, alpha:0 } })
      .png()
      .toFile(out);
    console.log('Wrote', out);
  }
}

generate().catch((e) => { console.error(e); process.exit(1); });
