// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/01_guard_clauses/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { getPayAmount } from "./main";
import assert from "assert";
assert.strictEqual(getPayAmount({ isDead: true, isSeparated: false, isRetired: false }), 1000);
assert.strictEqual(getPayAmount({ isDead: false, isSeparated: false, isRetired: true }), 3000);
assert.strictEqual(getPayAmount({ isDead: false, isSeparated: false, isRetired: false }), 5000);
console.log("PASS: 10.1 Test");
