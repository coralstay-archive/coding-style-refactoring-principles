// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { EmailAddress } from "./main";
import assert from "assert";

const email = EmailAddress.create("Alice@Test.Com");
assert.strictEqual(email.toString(), "alice@test.com");
assert.throws(() => EmailAddress.create("invalid-email"), /유효하지 않은/);
console.log("PASS: Ch 07 Test");
