// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/01_extract_function/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { printOwing } from "./main";
import assert from "assert";
const res = printOwing("Martin", 500);
assert.ok(res.includes("고객명: Martin"));
assert.ok(res.includes("$500"));
console.log("PASS: 6.1 Test");
