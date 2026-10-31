// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/11_split_phase/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { calculateOrderPrice } from "./main";
import assert from "assert";
assert.strictEqual(calculateOrderPrice("2000:2"), 4000);
console.log("PASS: 6.11 Split Phase");
