// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/01_fail_fast_validation/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { calculateMonthlyPayment } from "./main";
import assert from "assert";

assert.strictEqual(calculateMonthlyPayment(1200, 12), 100);
assert.throws(() => calculateMonthlyPayment(-500, 10));
assert.throws(() => calculateMonthlyPayment(1000, 0));
console.log("PASS: 6.1 Fail-Fast Validation");
