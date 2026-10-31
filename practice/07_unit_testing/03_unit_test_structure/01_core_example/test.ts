// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/03_unit_test_structure/01_core_example/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { Calculator } from "./main";
import assert from "assert";
// Arrange
const calc = new Calculator();
// Act
const result = calc.add(2, 3);
// Assert
assert.strictEqual(result, 5);
console.log("PASS: Ch 03 Test");
