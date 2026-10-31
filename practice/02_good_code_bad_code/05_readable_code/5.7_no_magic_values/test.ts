// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.7_no_magic_values/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { hoursToSeconds } from "./main";
import assert from "assert";
assert.strictEqual(hoursToSeconds(1), 3600);
console.log("PASS: 5.7 Test");
