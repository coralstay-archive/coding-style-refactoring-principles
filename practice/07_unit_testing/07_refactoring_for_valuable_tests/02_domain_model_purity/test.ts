// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/07_refactoring_for_valuable_tests/02_domain_model_purity/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { User } from "./main";
import assert from "assert";
const u = new User("test@domain.com");
assert.ok(u.changeEmail("new@domain.com"));
assert.strictEqual(u.email, "new@domain.com");
assert.strictEqual(u.isEmailConfirmed, false);
assert.ok(!u.changeEmail("invalid-email"));
console.log("PASS: 7.2 Domain Model Purity");
