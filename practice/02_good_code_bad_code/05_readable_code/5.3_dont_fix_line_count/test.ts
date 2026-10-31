// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.3_dont_fix_line_count/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { isWeekend } from "./main";
import assert from "assert";
assert.strictEqual(isWeekend(0), true);
assert.strictEqual(isWeekend(1), false);
console.log("PASS: 5.3 Test");
