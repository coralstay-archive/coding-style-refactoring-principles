// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/02_output_based_testing/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { PriceDiscountCalculator } from "./main";
import assert from "assert";
assert.strictEqual(PriceDiscountCalculator.calculate(1000, true), 800);
assert.strictEqual(PriceDiscountCalculator.calculate(1000, false), 950);
assert.strictEqual(PriceDiscountCalculator.calculate(-50, true), 0);
console.log("PASS: 6.2 Output-Based Testing");
