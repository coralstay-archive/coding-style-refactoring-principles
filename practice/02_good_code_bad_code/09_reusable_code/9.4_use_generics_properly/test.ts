// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.4_use_generics_properly/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { firstOrThrow } from "./main";
import assert from "assert";
assert.strictEqual(firstOrThrow([10, 20]), 10);
assert.throws(() => firstOrThrow([]), /비어 있습니다/);
console.log("PASS: 9.4 Test");
