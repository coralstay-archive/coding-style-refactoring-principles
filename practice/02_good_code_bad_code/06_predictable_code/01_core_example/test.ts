// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { sortAscending } from "./main";
import assert from "assert";

const orig = [3, 1, 2];
const res = sortAscending(orig);
assert.deepStrictEqual(orig, [3, 1, 2]);
assert.deepStrictEqual(res, [1, 2, 3]);
console.log("PASS: Ch 06 Test");
