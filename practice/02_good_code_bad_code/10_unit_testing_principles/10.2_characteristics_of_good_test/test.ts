// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/10.2_characteristics_of_good_test/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { PureAlgorithm } from "./main";
import assert from "assert";
assert.strictEqual(PureAlgorithm.isEven(2), true);
assert.strictEqual(PureAlgorithm.isEven(3), false);
console.log("PASS: 10.2 Test");
