// Rejected Olympic Sports — make.fun entry
// Bounty: u-motasimfuad-rejected-olympic-sports-9d83e7da
//
// The program writes a single rejected Olympic sport — one funny line,
// under 200 characters — to /output/entry.txt, where the house judge
// compares it pairwise against the other entries.
//
// The line: extreme ironing. It is a real fringe pastime (people really
// do iron shirts in absurd places), which makes it sound like something
// a broadcaster could have to explain with a straight face, while the
// cliff edge, the gale and the flying shirt supply the absurdity. The
// joke lands on the last words, and nothing in the line is wasted.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const LIMIT = 200;

// One line, 139 characters: a made-up event the Games might plausibly
// have turned down, written the way a commentator would have to read it.
const LINE =
  "Extreme ironing: athletes iron a shirt on a cliff edge in a gale — gold for the sharpest crease, disqualification if your shirt flies away.";

// The gate: UTF-8 text of 1 to 200 characters, not only whitespace,
// on a single line.
function checkLine(text: string): void {
  if (text.length === 0 || text.length > LIMIT) {
    throw new Error(`Line must be 1 to ${LIMIT} characters, got ${text.length}.`);
  }
  if (text.trim() === "") {
    throw new Error("Line must not be only whitespace.");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("Line must be a single line.");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20) {
      throw new Error(`Line holds a control character U+${code.toString(16)}.`);
    }
  }
}

checkLine(LINE);

// The grader mounts /output and runs this as an unprivileged user, so
// create the directory if it is missing but never remove it.
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

// Read the file back and confirm it holds exactly the line we checked,
// byte for byte, with no trailing newline added: the judge reads the
// file as submitted, so what is on disk must be the line and nothing else.
const onDisk = readFileSync(OUTPUT_PATH, "utf8");
if (onDisk !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from the entry.");
}
checkLine(onDisk);

console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
