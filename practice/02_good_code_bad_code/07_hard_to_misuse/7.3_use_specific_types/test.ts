// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.3_use_specific_types/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { UserId } from "./main";
import assert from "assert";
assert.strictEqual(new UserId("USR_100").id, "USR_100");
assert.throws(() => new UserId("INVALID"), /접두어/);
console.log("PASS: 7.3 Test");
