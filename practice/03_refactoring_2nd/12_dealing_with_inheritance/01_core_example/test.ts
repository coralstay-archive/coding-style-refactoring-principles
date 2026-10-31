// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/12_dealing_with_inheritance/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Booking } from "./main";
import assert from "assert";
const b1 = new Booking();
assert.strictEqual(b1.hasDinner(), false);
const b2 = new Booking({ hasDinner: () => true });
assert.strictEqual(b2.hasDinner(), true);
console.log("PASS: Ch 12 Test");
