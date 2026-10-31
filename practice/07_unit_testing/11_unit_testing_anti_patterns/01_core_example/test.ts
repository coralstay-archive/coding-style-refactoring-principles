// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/01_core_example/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { AntiPatternGuide } from "./main";
import assert from "assert";
assert.ok(AntiPatternGuide.avoidPrivateTesting().includes("공개 API"));
console.log("PASS: Ch 11 Test");
