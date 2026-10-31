// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.6_dont_ignore_compiler_warnings/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { checkWarningLevel } from "./main";
import assert from "assert";
assert.strictEqual(checkWarningLevel(true), "STRICT_MODE_ACTIVE");
console.log("PASS: 4.6 Test");
