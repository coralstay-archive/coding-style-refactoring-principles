// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/01_resistance_to_refactoring/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { PriceEngine } from "./main";
import assert from "assert";
assert.strictEqual(new PriceEngine().calcTotal([10, 20, 30]), 60);
console.log("PASS: 4.1 Test");
