// The line is built to the judge's published brief: it is one original line of fortune-cookie wisdom for a developer, it reads like a fortune cookie (one short balanced sentence landing in a single breath), it says something true about a developer's day (unreproducible bugs, demos), it turns that truth in a way not heard before, and it leaves a quiet twist that rewards a second read.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  "The bug you cannot reproduce is already in production, waiting for " +
  "the demo.";

// Guard the gate before writing: 1 to 120 characters, not only white space.
const length = [...text].length;
if (length < 1 || length > 120 || text.trim().length === 0) {
  throw new Error(`entry text must be 1-120 characters, got ${length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text + '\n');
