// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { BoundedCounter } from "./main";
import assert from "assert";

const c = new BoundedCounter(2);
c.increment();
c.increment();
assert.strictEqual(c.getCount(), 2);
assert.throws(() => c.increment(), /최대 한도/);
console.log("PASS: Ch 03 Test");
