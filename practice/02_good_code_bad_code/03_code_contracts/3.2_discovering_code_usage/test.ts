// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.2_discovering_code_usage/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { computeTaxRate } from "./main";
import assert from "assert";
assert.strictEqual(computeTaxRate("KR"), 0.10);
assert.strictEqual(computeTaxRate("US"), 0.08);
console.log("PASS: 3.2 Test");
