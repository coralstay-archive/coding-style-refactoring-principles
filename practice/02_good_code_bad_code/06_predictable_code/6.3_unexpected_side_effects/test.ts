// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.3_unexpected_side_effects/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { BankLedger } from "./main";
import assert from "assert";
const ledger = new BankLedger();
assert.strictEqual(ledger.getBalance(), 1000);
assert.strictEqual(ledger.getBalance(), 1000); // 2회 조회해도 불변
console.log("PASS: 6.3 Test");
