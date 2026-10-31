// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/01_core_example/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { User } from "./main";
import assert from "assert";
const u = new User("Alice");
u.rename("Bob");
assert.strictEqual(u.name, "Bob");
console.log("PASS: Ch 04 Test");
