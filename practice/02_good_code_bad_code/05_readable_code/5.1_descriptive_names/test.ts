// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.1_descriptive_names/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { calculateElapsedDays } from "./main";
import assert from "assert";
assert.strictEqual(calculateElapsedDays(0, 86400000 * 5), 5);
console.log("PASS: 5.1 Test");
