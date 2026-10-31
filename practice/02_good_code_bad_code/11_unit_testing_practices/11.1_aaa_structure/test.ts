// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.1_aaa_structure/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { Counter } from "./main";
import assert from "assert";
// Arrange
const counter = new Counter();
// Act
counter.inc();
// Assert
assert.strictEqual(counter.val(), 1);
console.log("PASS: 11.1 Test");
