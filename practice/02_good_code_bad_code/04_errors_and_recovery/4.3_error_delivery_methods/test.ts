// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.3_error_delivery_methods/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { findItem } from "./main";
import assert from "assert";
const ok = findItem(1);
assert.strictEqual(ok.ok, true);
const err = findItem(99);
assert.strictEqual(err.ok, false);
console.log("PASS: 4.3 Test");
