// news-image-20261124 entry: the page is rendered to ./entry.png by draw.py,
// and this program publishes exactly those bytes to /output/entry.png.
//
// The grader runs with no network, so the only work here is a checked copy:
// verify the PNG is present and inside the gate's limits (at most 1 MiB,
// at most 1024x1024), then write it out. Fail loudly rather than ship a
// truncated or oversized picture.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1024 * 1024;
const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

const size = statSync(source).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the ${MAX_BYTES}-byte gate`);
}

const head = readFileSync(source).subarray(0, 33);
const isPng = head.subarray(1, 4).toString('latin1') === 'PNG';
if (!isPng) {
  throw new Error('entry.png is not a PNG: the gate takes a whole PNG or JPEG');
}

// PNG stores width and height big-endian in the IHDR chunk, bytes 16..23.
const width = head.readUInt32BE(16);
const height = head.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (${width}x${height}, ${size} bytes)`);
