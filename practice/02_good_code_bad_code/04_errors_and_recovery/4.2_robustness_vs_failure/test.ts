// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.2_robustness_vs_failure/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { parsePositiveInt } from "./main";
import assert from "assert";
assert.strictEqual(parsePositiveInt("100"), 100);
assert.throws(() => parsePositiveInt("-5"), /Fail-Fast/);
assert.throws(() => parsePositiveInt("abc"), /Fail-Fast/);
console.log("PASS: 4.2 Test");
