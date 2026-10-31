// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.5_avoid_nested_code/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { validateUser } from "./main";
import assert from "assert";
assert.strictEqual(validateUser(null), false);
assert.strictEqual(validateUser({ active: false, age: 30 }), false);
assert.strictEqual(validateUser({ active: true, age: 20 }), true);
console.log("PASS: 5.5 Test");
