// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.4_dont_modify_input_params/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { appendTag } from "./main";
import assert from "assert";
const original = ["a", "b"];
const updated = appendTag(original, "c");
assert.deepStrictEqual(original, ["a", "b"]);
assert.deepStrictEqual(updated, ["a", "b", "c"]);
console.log("PASS: 6.4 Test");
