// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.5_mock_best_practices/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { PriceCalculator } from "./main";
import assert from "assert";
const calc = new PriceCalculator();
assert.strictEqual(calc.total([{ price: 10 }, { price: 30 }]), 40);
console.log("PASS: 11.5 Test");
