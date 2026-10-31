// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.5_caller_recoverable_errors/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { writeData } from "./main";
import assert from "assert";
const res = writeData(false);
assert.strictEqual(res.success, false);
assert.strictEqual(res.retryAfterSeconds, 60);
console.log("PASS: 4.5 Test");
