// Worst AI Advice — writes one original line of worst AI advice to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "To speed up your PC, delete the System32 folder — it's just bloatware Microsoft hides to slow you down.";

// The gate requires 1–140 characters of non-whitespace UTF-8 text.
if (LINE.trim().length < 1 || LINE.length > 140) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
