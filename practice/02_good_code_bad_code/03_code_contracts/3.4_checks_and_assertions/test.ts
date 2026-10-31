// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.4_checks_and_assertions/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { transferMoney } from "./main";
import assert from "assert";
assert.strictEqual(transferMoney(50), true);
assert.throws(() => transferMoney(-10), /송금액은 양수/);
console.log("PASS: 3.4 Test");
