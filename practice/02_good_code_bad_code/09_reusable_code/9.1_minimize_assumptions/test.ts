// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.1_minimize_assumptions/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { formatPath } from "./main";
import assert from "assert";
assert.strictEqual(formatPath("dir", "f"), "dir/f");
assert.strictEqual(formatPath("dir/", "f"), "dir/f");
console.log("PASS: 9.1 Test");
