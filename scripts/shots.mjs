/**
 * Skärmbilder för granskning. Två genomgångar per bredd.
 *
 * Den första kör med reducerad rörelse: Lenis startar inte, avslöjandena står i
 * sitt slutläge och bandet håller sig innanför vyn. Den visar alltså layouten
 * som den ser ut färdig, ruta för ruta nedåt.
 *
 * Den andra kör med rörelse på och skrollar med hjulet, så att Lenis får ta
 * emot den. Den visar avslöjandena och bandets vandring under förlopp.
 *
 *   node scripts/shots.mjs [url]
 */

import { mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

/* Förhandsvisningen av bygget och inte dev-servern: den senare håller en
 * öppen förbindelse för omladdning, och sidan blir därför aldrig stilla. */
const SITE = process.argv[2] ?? "http://127.0.0.1:4173/";
const OUT = fileURLToPath(new URL("../.shots/", import.meta.url));

const SIZES = [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];

const settle = (page, ms = 450) => page.waitForTimeout(ms);

/** Rutor nedåt genom sidan, med allt i slutläge. */
const still = async (browser, size) => {
  const context = await browser.newContext({
    viewport: { width: size.width, height: size.height },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(SITE, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await settle(page);

  const total = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.round(size.height * 0.9);
  let index = 0;

  for (let top = 0; top < total - size.height * 0.3; top += step) {
    await page.evaluate((y) => window.scrollTo(0, y), top);
    await settle(page, 350);
    await page.screenshot({
      path: `${OUT}${size.name}-still-${String(index).padStart(2, "0")}.png`,
    });
    index += 1;
  }

  console.log(`${size.name}: ${index} rutor, sidhöjd ${total}px`);
  await context.close();
};

/** Samma sida under rörelse, skrollad med hjulet så Lenis tar emot. */
const moving = async (browser, size) => {
  const context = await browser.newContext({
    viewport: { width: size.width, height: size.height },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(SITE, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await settle(page, 900);

  await page.screenshot({ path: `${OUT}${size.name}-rorelse-0.png` });

  const steps = [
    ["1", 0.8],
    ["2", 1.0],
    ["3", 1.2],
  ];

  for (const [label, factor] of steps) {
    await page.mouse.wheel(0, Math.round(size.height * factor));
    /* Kort väntan: kanten ska fångas medan den fortfarande far uppåt. */
    await settle(page, 260);
    await page.screenshot({ path: `${OUT}${size.name}-rorelse-${label}.png` });
  }

  const lenisRunning = await page.evaluate(() =>
    document.documentElement.classList.contains("lenis")
  );
  console.log(`${size.name}: Lenis igång ${lenisRunning}`);

  await context.close();
};

const main = async () => {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch();
  for (const size of SIZES) {
    await still(browser, size);
    await moving(browser, size);
  }
  await browser.close();
};

main();
