// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { NotificationService, MessageSender } from "./main";
import assert from "assert";

class MockSender implements MessageSender {
    public sentTo = "";
    public sentBody = "";
    sendMessage(to: string, body: string): boolean {
        this.sentTo = to;
        this.sentBody = body;
        return true;
    }
}

const mock = new MockSender();
const svc = new NotificationService(mock);
svc.notifyUser("usr99", "테스트 알림");
assert.strictEqual(mock.sentTo, "usr99");
assert.strictEqual(mock.sentBody, "[ALERT] 테스트 알림");
console.log("PASS: Ch 08 Test");
