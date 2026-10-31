// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.3_contracts_details/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { SafeId } from "./main";
import assert from "assert";
assert.strictEqual(SafeId.from("ABCDE").value, "ABCDE");
assert.throws(() => SafeId.from("123"), /5글자 이상/);
console.log("PASS: 3.3 Test");
