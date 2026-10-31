// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/01_goal_of_unit_testing/01_sustainable_growth/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { ProjectMetrics } from "./main";
import assert from "assert";
assert.strictEqual(ProjectMetrics.isHealthy(0.001, 100), true);
console.log("PASS: 1.1 Test");
