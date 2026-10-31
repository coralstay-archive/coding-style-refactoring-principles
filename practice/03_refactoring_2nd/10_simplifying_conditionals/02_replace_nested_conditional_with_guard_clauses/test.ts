// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/02_replace_nested_conditional_with_guard_clauses/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { getPayAmount } from "./main";
import assert from "assert";

assert.strictEqual(getPayAmount({ isSeparated: true, isRetired: false, basePay: 5000 }), 0);
assert.strictEqual(getPayAmount({ isSeparated: false, isRetired: true, basePay: 4000 }), 2000);
assert.strictEqual(getPayAmount({ isSeparated: false, isRetired: false, basePay: 3000 }), 3000);
console.log("PASS: 10.2 Replace Nested Conditional with Guard Clauses");
