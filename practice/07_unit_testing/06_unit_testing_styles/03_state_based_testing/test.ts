// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/03_state_based_testing/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { OrderBucket } from "./main";
import assert from "assert";
const bucket = new OrderBucket();
bucket.add("Refactoring 2nd");
bucket.add("Unit Testing");
assert.strictEqual(bucket.count, 2);
assert.deepStrictEqual(bucket.items, ["Refactoring 2nd", "Unit Testing"]);
console.log("PASS: 6.3 State-Based Testing");
