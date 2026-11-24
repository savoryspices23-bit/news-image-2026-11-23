// Render page/day.html to day.png (1024 x 1024) with headless Chrome, then check the PNG the way the gate does:
// signature, size in bytes, and the width and height in its IHDR chunk.
// Usage: node tools/shot.mjs [--preview <out.png>]   (--preview also writes a 300 px wide view for a legibility check)
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const CHROME = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const root = resolve(import.meta.dirname, '..');

function shoot(url, out, w, h) {
  const profile = mkdtempSync(join(tmpdir(), 'shot-'));
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--user-data-dir=${profile}`, `--window-size=${w},${h}`, '--virtual-time-budget=3000', `--screenshot=${out}`, url], { stdio: 'ignore' });
}

const png = join(root, 'day.png');
shoot(pathToFileURL(join(root, 'page', 'day.html')).href, png, 1024, 1024);

const b = readFileSync(png);
const sig = b.subarray(0, 8).toString('hex') === '89504e470d0a1a0a';
const width = b.readUInt32BE(16), height = b.readUInt32BE(20);
console.log(`day.png: ${b.length} bytes, ${width}x${height}, png signature ${sig ? 'ok' : 'BAD'}`);
if (!sig || b.length > 1048576 || width > 1024 || height > 1024) process.exit(1);

const i = process.argv.indexOf('--preview');
if (i > 0) {
  const view = join(mkdtempSync(join(tmpdir(), 'view-')), 'view.html');
  writeFileSync(view, `<html><body style="margin:0"><img src="${pathToFileURL(png).href}" style="width:300px;height:300px;display:block"></body></html>`);
  shoot(pathToFileURL(view).href, resolve(process.argv[i + 1]), 300, 300);
  console.log('preview:', process.argv[i + 1]);
}
