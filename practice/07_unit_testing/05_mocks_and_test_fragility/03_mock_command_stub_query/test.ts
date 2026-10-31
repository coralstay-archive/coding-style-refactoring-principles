// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/05_mocks_and_test_fragility/03_mock_command_stub_query/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { NotificationManager, UserDatabase, EmailService } from "./main";
import assert from "assert";

let sentEmail = "";
let sentMsg = "";
const stubDb: UserDatabase = { getUserEmail: (id) => id + "@company.com" };
const mockEmail: EmailService = {
    send: (to, body) => { sentEmail = to; sentMsg = body; }
};

const mgr = new NotificationManager(stubDb, mockEmail);
mgr.notify("martin", "Refactor Now!");
assert.strictEqual(sentEmail, "martin@company.com");
assert.strictEqual(sentMsg, "Refactor Now!");
console.log("PASS: 5.3 Command Mock, Query Stub");
