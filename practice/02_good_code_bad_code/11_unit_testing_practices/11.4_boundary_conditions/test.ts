// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.4_boundary_conditions/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { isValidAge } from "./main";
import assert from "assert";
assert.strictEqual(isValidAge(0), true);
assert.strictEqual(isValidAge(150), true);
assert.strictEqual(isValidAge(-1), false);
assert.strictEqual(isValidAge(151), false);
console.log("PASS: 11.4 Test");
