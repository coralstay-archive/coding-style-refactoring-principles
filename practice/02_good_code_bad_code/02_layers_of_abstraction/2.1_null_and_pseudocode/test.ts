// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.1_null_and_pseudocode/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { safeFind } from "./main";
import assert from "assert";
assert.strictEqual(safeFind([1, 2, 3], x => x === 2), 2);
assert.strictEqual(safeFind([1, 2, 3], x => x === 99), null);
console.log("PASS: 2.1 Test");
