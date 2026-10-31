// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/03_unit_test_structure/01_aaa_and_fixtures/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { UserAccount } from "./main";
import assert from "assert";
// Arrange
const acc = new UserAccount(100);
// Act
acc.deposit(50);
// Assert
assert.strictEqual(acc.balance, 150);
console.log("PASS: 3.1 Test");
