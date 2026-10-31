// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/02_split_variable/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { computeDistance } from "./main";
import assert from "assert";
assert.strictEqual(computeDistance(10, 2), 20);
console.log("PASS: 9.1 Split Variable");
