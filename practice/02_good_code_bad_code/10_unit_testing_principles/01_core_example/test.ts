// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { SessionManager, Clock } from "./main";
import assert from "assert";

class FakeClock implements Clock {
    public now = 100000;
    getCurrentTimeMs(): number { return this.now; }
}

const fake = new FakeClock();
const mgr = new SessionManager(fake, 5000);
assert.strictEqual(mgr.isExpired(96000), false);
fake.now = 106000;
assert.strictEqual(mgr.isExpired(100000), true);
console.log("PASS: Ch 10 Test");
