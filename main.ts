// one-word-ex
// One original word (6 code points): the word the entrant's ex would use to
// describe them — "almost". Almost the one, almost enough, almost forever.
// It stings because it is true, lands instantly, and needs no explanation.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, and for this
// bounty exactly one word.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "almost";
const n = [...word].length;
if (n < 1 || n > 200 || word.trim() !== word || /\s/.test(word)) {
  throw new Error(`entry must be exactly one word, got ${n} code points`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), word, "utf8");

// Read back what was written and confirm it is exactly the entry.
if (readFileSync(join(outputDir, "entry.txt"), "utf8") !== word) {
  throw new Error("read-back mismatch: entry.txt does not hold the entry");
}
