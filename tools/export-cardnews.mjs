import { createServer } from "node:http";
import { createReadStream, existsSync, mkdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/adona/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const target = resolve(process.argv[2] ?? "contents/006-dopamine-wanting-liking/output/cardnews");
if (!existsSync(join(target, "index.html"))) throw new Error(`index.html not found: ${target}`);
// Keep final PNGs in a dedicated exports folder so source files and deliverables stay separate.
const output = join(target, "exports");
mkdirSync(output, { recursive: true });
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg" };
const server = createServer((req, res) => {
  const clean = decodeURIComponent((req.url ?? "/").split("?")[0]).replace(/^\/+/, "");
  const file = resolve(join(target, clean || "index.html"));
  if (!file.startsWith(target) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "Content-Type": types[extname(file).toLowerCase()] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
});
await new Promise((resolveServer) => server.listen(0, "127.0.0.1", resolveServer));
const port = server.address().port;
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
const cards = await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: "load" }).then(async () => {
  const modern = page.locator(".card-item");
  const legacy = page.locator(".item");
  return (await modern.count()) || (await legacy.count());
});
for (let card = 1; card <= cards; card++) {
  await page.goto(`http://127.0.0.1:${port}/index.html?export=1&card=${card}`, { waitUntil: "load" });
  await page.waitForTimeout(300);
  const modern = page.locator(`.card-item[data-card="${card}"] .card-shell`);
  const legacy = page.locator(`.item:nth-child(${card}) .shell`);
  const targetCard = (await modern.count()) ? modern : legacy;
  await targetCard.screenshot({ path: join(output, `card-${String(card).padStart(2, "0")}.png`) });
}
await browser.close();
server.close();
console.log(`Exported ${cards} cards to ${output}`);
