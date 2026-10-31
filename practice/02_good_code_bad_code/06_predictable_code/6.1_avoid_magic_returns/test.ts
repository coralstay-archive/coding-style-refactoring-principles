// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.1_avoid_magic_returns/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { parseCoordinate } from "./main";
import assert from "assert";
assert.strictEqual(parseCoordinate("abc"), null);
assert.strictEqual(parseCoordinate("12.5"), 12.5);
console.log("PASS: 6.1 Test");
