// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/01_core_example/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { calculateDiscount } from "./main";
import assert from "assert";
assert.strictEqual(calculateDiscount(200, 20), 160);
console.log("PASS: Ch 06 Test");
