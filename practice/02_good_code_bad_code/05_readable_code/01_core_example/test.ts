// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { calculateDeliveryFee } from "./main";
import assert from "assert";

assert.strictEqual(calculateDeliveryFee(3, false), 2500);
assert.strictEqual(calculateDeliveryFee(8, false), 4000);
assert.strictEqual(calculateDeliveryFee(10, true), 0);
console.log("PASS: Ch 05 Test");
