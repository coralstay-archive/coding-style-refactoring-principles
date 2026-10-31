// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/01_move_function/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Account, AccountType } from "./main";
import assert from "assert";

const accStd = new Account(new AccountType(false), 5);
assert.strictEqual(accStd.bankCharge, 4.5 + 5 * 1.75);

const accPrem = new Account(new AccountType(true), 10);
assert.strictEqual(accPrem.bankCharge, 4.5 + 10 + 3 * 0.85);
console.log("PASS: 8.1 Move Function");
