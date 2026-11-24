// fortune-cookie-dev-20261124 — my entry for make.fun's "Fortune Cookie
// Wisdom for Developers" bounty ($2 USDC, 120 characters max).
//
// A fortune that reads like a proverb and stings like a post-mortem: the bug
// you could never reproduce on your machine has been sitting in production
// all along, patiently waiting for the one moment you demo in front of
// people. Short, balanced, true — and it gets funnier the second time.
//
// Check it locally (the grader uses MAKEFUN_OUTPUT_DIR=/output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE = "The bug you cannot reproduce is already in production, waiting for the demo.";
const CEILING = 120;

function guard(value) {
  const count = Array.from(value).length;
  if (value.trim() === "") {
    throw new Error("fortune came out blank");
  }
  if (count > CEILING) {
    throw new Error(`fortune is ${count} chars, ceiling is ${CEILING}`);
  }
  if (value.includes("\n")) {
    throw new Error("fortune must be a single line");
  }
  if (value.includes("\t")) {
    throw new Error("fortune must not contain tabs");
  }
}

function writeOut() {
  guard(FORTUNE);
  const dest = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(dest, { recursive: true });
  writeFileSync(join(dest, "entry.txt"), FORTUNE + "\n");
}

writeOut();
