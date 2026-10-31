// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { DiscountCalculator } from "./main";
import assert from "assert";

// Arrange
const calc = new DiscountCalculator();

// Act
const finalPrice = calc.calculatePrice(10000, 20);

// Assert
assert.strictEqual(finalPrice, 8000);
console.log("PASS: Ch 11 Test");
