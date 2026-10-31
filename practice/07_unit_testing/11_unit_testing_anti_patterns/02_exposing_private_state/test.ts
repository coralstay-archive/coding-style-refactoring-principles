// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/02_exposing_private_state/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { BankAccount } from "./main";
import assert from "assert";
const acc = new BankAccount();
assert.ok(acc.deposit(200));
assert.ok(acc.withdraw(50));
// balance 멤버 변수에 직접 접근하지 않고 공개된 getStatement()로 관찰 가능한 동작 검증
assert.strictEqual(acc.getStatement(), "Current Balance: $150");
console.log("PASS: 11.2 Do Not Expose Private State");
