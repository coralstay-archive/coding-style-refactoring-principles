// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/05_mocks_and_test_fragility/01_mock_vs_stub/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { CheckoutService } from "./main";
import assert from "assert";
let emailSent = false;
const svc = new CheckoutService(
    { getPrice: () => 100 }, // Stub
    { send: () => { emailSent = true; } } // Mock
);
assert.strictEqual(svc.buy("item1", "test@user.com"), true);
assert.strictEqual(emailSent, true);
console.log("PASS: 5.1 Test");
