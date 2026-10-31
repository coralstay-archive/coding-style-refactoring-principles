// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/09_mocking_best_practices/01_mock_unmanaged_only/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { NotificationService, MessageGateway } from "./main";
import assert from "assert";
let captured = "";
const fakeGateway: MessageGateway = { send: (m) => { captured = m; return true; } };
const svc = new NotificationService(fakeGateway);
assert.strictEqual(svc.notifyUser("42", "Welcome"), true);
assert.strictEqual(captured, "[User: 42] Welcome");
console.log("PASS: 9.1 Test");
