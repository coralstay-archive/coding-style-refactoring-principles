// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/01_anti_pattern_private_methods/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { SafeCalculator } from "./main";
import assert from "assert";
assert.strictEqual(new SafeCalculator().calculate(10), 20);
console.log("PASS: 11.1 Test");
