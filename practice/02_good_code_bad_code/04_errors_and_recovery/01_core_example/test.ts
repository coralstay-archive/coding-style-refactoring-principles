// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { safeDivide } from "./main";
import assert from "assert";

const okRes = safeDivide(20, 4);
assert.strictEqual(okRes.ok, true);
if (okRes.ok) assert.strictEqual(okRes.value, 5);

const errRes = safeDivide(10, 0);
assert.strictEqual(errRes.ok, false);
console.log("PASS: Ch 04 Test");
