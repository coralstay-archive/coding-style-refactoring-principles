// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/01_decompose_conditional/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { calculateCharge } from "./main";
import assert from "assert";

assert.strictEqual(calculateCharge(10, 100, true), 800);
assert.strictEqual(calculateCharge(10, 100, false), 1000);
console.log("PASS: 10.1 Decompose Conditional");
