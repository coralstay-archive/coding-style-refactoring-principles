// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/03_consolidate_conditional_expression/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { disabilityAmount } from "./main";
import assert from "assert";
assert.strictEqual(disabilityAmount({ seniority: 1, monthsDisabled: 5, isPartTime: false }), 0);
assert.strictEqual(disabilityAmount({ seniority: 5, monthsDisabled: 3, isPartTime: false }), 1000);
console.log("PASS: 10.2 Consolidate Conditional Expression");
