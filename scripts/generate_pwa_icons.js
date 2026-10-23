import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPng(width, height, drawFn) {
  const bytesPerPixel = 4;
  const rowSize = width * bytesPerPixel;
  const rawData = Buffer.alloc((rowSize + 1) * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (rowSize + 1);
    rawData[rowOffset] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = drawFn(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * bytesPerPixel;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  // CRC32 table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function chunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(12 + len);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  // PNG Signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8-bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflated),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

function drawDevShelf(x, y, w, h, isMaskable = false) {
  // Background
  const bg = [13, 18, 29, 255]; // #0d121d
  const blue = [56, 189, 248, 255]; // #38bdf8
  const white = [248, 250, 252, 255];
  const border = [38, 51, 77, 255];

  // Normalized coords
  const nx = x / w;
  const ny = y / h;

  // Outer rounded border for non-maskable
  if (!isMaskable) {
    const r = 0.22;
    const dx = Math.max(0, Math.abs(nx - 0.5) - (0.5 - r));
    const dy = Math.max(0, Math.abs(ny - 0.5) - (0.5 - r));
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > r) return [0, 0, 0, 0];
    if (dist > r - 0.02) return border;
  }

  // Draw </> symbol
  // Left bracket < : lines from (0.35, 0.35) to (0.26, 0.5) to (0.35, 0.65)
  // Slash / : line from (0.55, 0.30) to (0.45, 0.70)
  // Right bracket > : lines from (0.65, 0.35) to (0.74, 0.5) to (0.65, 0.65)
  const stroke = 0.038;

  function distToSegment(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  }

  const d1 = distToSegment(nx, ny, 0.36, 0.36, 0.25, 0.50);
  const d2 = distToSegment(nx, ny, 0.25, 0.50, 0.36, 0.64);
  const d3 = distToSegment(nx, ny, 0.54, 0.32, 0.46, 0.68);
  const d4 = distToSegment(nx, ny, 0.64, 0.36, 0.75, 0.50);
  const d5 = distToSegment(nx, ny, 0.75, 0.50, 0.64, 0.64);

  const minD = Math.min(d1, d2, d4, d5);
  if (minD < stroke) {
    return blue;
  }
  if (d3 < stroke) {
    return white;
  }

  return bg;
}

const pubDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

fs.writeFileSync(path.join(pubDir, 'pwa-192x192.png'), createPng(192, 192, (x, y, w, h) => drawDevShelf(x, y, w, h, false)));
fs.writeFileSync(path.join(pubDir, 'pwa-512x512.png'), createPng(512, 512, (x, y, w, h) => drawDevShelf(x, y, w, h, false)));
fs.writeFileSync(path.join(pubDir, 'pwa-maskable-512x512.png'), createPng(512, 512, (x, y, w, h) => drawDevShelf(x, y, w, h, true)));
fs.writeFileSync(path.join(pubDir, 'apple-touch-icon.png'), createPng(180, 180, (x, y, w, h) => drawDevShelf(x, y, w, h, false)));

// Also create icon.svg
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="112" fill="#0d121d" stroke="#26334d" stroke-width="16"/>
  <path d="M 184 184 L 128 256 L 184 328" fill="none" stroke="#38bdf8" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 276 164 L 236 348" fill="none" stroke="#f8fafc" stroke-width="36" stroke-linecap="round"/>
  <path d="M 328 184 L 384 256 L 328 328" fill="none" stroke="#38bdf8" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
fs.writeFileSync(path.join(pubDir, 'icon.svg'), svg);

console.log('Icons generated successfully!');
