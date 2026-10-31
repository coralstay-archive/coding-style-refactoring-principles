// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.2_ensure_valid_state_at_creation/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { MoneyAmount } from "./main";
import assert from "assert";
assert.doesNotThrow(() => new MoneyAmount(50, "KRW"));
assert.throws(() => new MoneyAmount(-1, "USD"), /음수/);
assert.throws(() => new MoneyAmount(10, ""), /3자리/);
console.log("PASS: 7.2 Test");
