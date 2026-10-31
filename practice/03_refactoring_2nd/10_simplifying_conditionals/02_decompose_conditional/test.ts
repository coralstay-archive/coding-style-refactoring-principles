// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/02_decompose_conditional/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { getTicketPrice } from "./main";
import assert from "assert";
assert.strictEqual(getTicketPrice(new Date(2026, 6, 1), 2), 140);
assert.strictEqual(getTicketPrice(new Date(2026, 0, 1), 2), 200);
console.log("PASS: 10.1 Decompose Conditional");
