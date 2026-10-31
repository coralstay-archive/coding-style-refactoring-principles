// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/03_extract_variable/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { calculateTotalPrice } from "./main";
import assert from "assert";
const total = calculateTotalPrice({ quantity: 100, itemPrice: 10 });
assert.strictEqual(total, 1100);
console.log("PASS: 6.3 Extract Variable");
