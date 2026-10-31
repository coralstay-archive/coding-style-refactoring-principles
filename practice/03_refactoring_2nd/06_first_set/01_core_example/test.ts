// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_first_set/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { printOwing } from "./main";
import assert from "assert";
const out = printOwing("Kent", 300);
assert.ok(out.includes("고객명: Kent"));
assert.ok(out.includes("300"));
console.log("PASS: Ch 06 Test");
