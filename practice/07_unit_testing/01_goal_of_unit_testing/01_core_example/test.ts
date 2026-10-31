// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/01_goal_of_unit_testing/01_core_example/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { ProjectHealth } from "./main";
import assert from "assert";
assert.strictEqual(ProjectHealth.isSustainable(80, true), true);
console.log("PASS: Ch 01 Test");
