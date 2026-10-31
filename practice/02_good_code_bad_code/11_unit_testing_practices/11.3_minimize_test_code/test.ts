// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.3_minimize_test_code/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { SafeMath } from "./main";
import assert from "assert";
assert.strictEqual(SafeMath.clamp(5, 0, 10), 5);
assert.strictEqual(SafeMath.clamp(-5, 0, 10), 0);
assert.strictEqual(SafeMath.clamp(15, 0, 10), 10);
console.log("PASS: 11.3 Test");
