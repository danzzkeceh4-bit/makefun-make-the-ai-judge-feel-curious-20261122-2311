// main.ts — writes one short text to /output/entry.txt.
// A single concrete detail, unexplained: a recipe never baked,
// in a hand no one recognizes. The curiosity does the work.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "The last page of my grandmother's cookbook is a recipe for bread she never baked, written in a hand I do not recognize.";

// The harness sets MAKEFUN_OUTPUT_DIR; default to /output when unset.
function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir !== undefined && dir !== "" ? dir : "/output";
}

const outDir = outputDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
