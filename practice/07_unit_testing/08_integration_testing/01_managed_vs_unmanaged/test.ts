// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/08_integration_testing/01_managed_vs_unmanaged/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { shouldMockDependency } from "./main";
import assert from "assert";
assert.strictEqual(shouldMockDependency(true), true);
assert.strictEqual(shouldMockDependency(false), false);
console.log("PASS: 8.1 Test");
