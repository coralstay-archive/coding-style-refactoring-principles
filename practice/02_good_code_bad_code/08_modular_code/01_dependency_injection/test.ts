// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/01_dependency_injection/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { OrderProcessor, Notifier } from "./main";
import assert from "assert";

class FakeNotifier implements Notifier {
    public sentMessages: string[] = [];
    send(message: string): boolean {
        this.sentMessages.push(message);
        return true;
    }
}

const fake = new FakeNotifier();
const processor = new OrderProcessor(fake);

assert.strictEqual(processor.checkout("ORD-100", 500), true);
assert.strictEqual(fake.sentMessages.length, 1);
assert.ok(fake.sentMessages[0].includes("ORD-100"));
assert.strictEqual(processor.checkout("ORD-101", -10), false);
console.log("PASS: 8.1 Dependency Injection");
