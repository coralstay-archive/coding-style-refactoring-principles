// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/10_database_testing/01_core_example/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { DatabaseTestPolicy } from "./main";
import assert from "assert";
assert.ok(DatabaseTestPolicy.getCleanupStrategy().includes("초기화"));
console.log("PASS: Ch 10 Test");
