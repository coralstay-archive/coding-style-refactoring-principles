// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.1_recoverability/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { isRecoverable, NetworkError, OutOfMemoryFatalError } from "./main";
import assert from "assert";
assert.strictEqual(isRecoverable(new NetworkError("net")), true);
assert.strictEqual(isRecoverable(new OutOfMemoryFatalError("oom")), false);
console.log("PASS: 4.1 Test");
