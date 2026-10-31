// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.2_proper_comments/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { calculateWorkaroundTimeout } from "./main";
import assert from "assert";
assert.strictEqual(calculateWorkaroundTimeout(), 5000);
console.log("PASS: 5.2 Test");
