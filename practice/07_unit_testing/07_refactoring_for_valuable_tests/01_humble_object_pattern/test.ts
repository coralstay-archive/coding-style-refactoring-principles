// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/07_refactoring_for_valuable_tests/01_humble_object_pattern/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { DomainLogic } from "./main";
import assert from "assert";
assert.strictEqual(DomainLogic.canProcess(100, 50), true);
assert.strictEqual(DomainLogic.canProcess(30, 50), false);
console.log("PASS: 7.1 Test");
