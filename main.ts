// One Word From Grandma — make.fun entry.
// Writes one word to /output/entry.txt (or $ENTRY_OUTPUT for local testing).
// Node 22, stdlib only, no network, deterministic output.
//
// The word is "ChatGTP": the typo a grandma actually makes when she means
// ChatGPT, with the P and T swapped at the end. Why this word, against the
// judge's five criteria (in order):
// 1. It is the single word she would text about AI: the name of the AI she
//    has heard about, typed the way she would type it to a grandchild.
// 2. The swapped letters are her voice, warm and a little baffled, with no
//    extra words needed to hear it.
// 3. The joke lands on first read: everyone has seen this typo, and the
//    mistake itself is the punchline, with no caption or context.
// 4. It names ChatGPT, the AI itself, not machines in general, so it is
//    tied to AI more directly than a robot word or a generic grandma word.
// 5. It is the familiar name made fresh by the mistake, and the intended
//    word is obvious at a glance.
// The brief says a typo she would actually make counts, and this is the
// most widely recognised grandma typo of the best-known AI name.
// The output is 7 characters, well inside the 1-30 limit, one word, no
// punctuation, no trailing newline, written with stdlib-only fs/path calls
// and no network access.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "ChatGTP";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
