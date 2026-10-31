// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.2_test_public_apis/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { TextTransformer } from "./main";
import assert from "assert";
assert.strictEqual(new TextTransformer().transform(" ABC "), "abc");
console.log("PASS: 11.2 Test");
