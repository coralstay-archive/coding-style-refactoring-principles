// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { getPayAmount } from "./main";
import assert from "assert";
assert.strictEqual(getPayAmount(true, false, false), 0);
assert.strictEqual(getPayAmount(false, true, false), 100);
assert.strictEqual(getPayAmount(false, false, false), 300);
console.log("PASS: Ch 10 Test");
