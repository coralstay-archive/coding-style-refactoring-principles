// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/03_immutable_value_objects/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { MoneyAmount } from "./main";
import assert from "assert";

const m1 = new MoneyAmount(100, "KRW");
const m2 = new MoneyAmount(200, "KRW");
const sum = m1.add(m2);

assert.strictEqual(sum.amount, 300);
assert.strictEqual(m1.amount, 100); // 원본 불변
assert.throws(() => m1.add(new MoneyAmount(50, "USD")));
console.log("PASS: 7.3 Immutable Value Object");
