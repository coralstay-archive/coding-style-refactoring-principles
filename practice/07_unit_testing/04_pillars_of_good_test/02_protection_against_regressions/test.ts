// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/02_protection_against_regressions/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { calculateCompoundInterest } from "./main";
import assert from "assert";
assert.strictEqual(calculateCompoundInterest(1000, 0.05, 1), 1050);
assert.strictEqual(calculateCompoundInterest(1000, 0.05, 3), 1158);
console.log("PASS: 4.2 Protection Against Regressions");
