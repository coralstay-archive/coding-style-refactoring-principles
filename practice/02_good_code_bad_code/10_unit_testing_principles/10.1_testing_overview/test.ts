// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/10.1_testing_overview/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { multiply } from "./main";
import assert from "assert";
assert.strictEqual(multiply(2, 5), 10);
console.log("PASS: 10.1 Test");
