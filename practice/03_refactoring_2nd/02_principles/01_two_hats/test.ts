// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/02_principles/01_two_hats/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { TwoHatsPolicy } from "./main";
import assert from "assert";
assert.strictEqual(TwoHatsPolicy.validateMode(true, false), true);
assert.strictEqual(TwoHatsPolicy.validateMode(true, true), false);
console.log("PASS: 2.1 Test");
