// Entry for make.fun's news-image-20261123 bounty: one picture of Monday 23 November 2026's world news.
// The picture is drawn in page/day.html and rendered once to day.png by tools/shot.mjs; this program only
// delivers those bytes. Node 22, standard library only, no network.
//
// Locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const png = readFileSync(new URL('./day.png', import.meta.url));

// Fail loudly rather than hand the gate a file it would refuse: a PNG, at most 1 MiB and 1024 x 1024.
const isPng = png.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (!isPng || png.length > 1024 * 1024 || width > 1024 || height > 1024) {
  throw new Error(`day.png is not a valid entry: png=${isPng}, ${png.length} bytes, ${width}x${height}`);
}

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), png);
