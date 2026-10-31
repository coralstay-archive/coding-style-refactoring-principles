// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/01_output_based_testing/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { applyCoupon } from "./main";
import assert from "assert";
assert.strictEqual(applyCoupon(100, "VIP10"), 90);
assert.strictEqual(applyCoupon(100, "NONE"), 100);
console.log("PASS: 6.1 Test");
