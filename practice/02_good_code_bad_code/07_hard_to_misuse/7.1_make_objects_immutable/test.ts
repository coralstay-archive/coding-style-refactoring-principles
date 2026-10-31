// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.1_make_objects_immutable/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { Dimension2D } from "./main";
import assert from "assert";
const d = new Dimension2D(10, 20);
const scaled = d.scale(2);
assert.strictEqual(d.width, 10);
assert.strictEqual(scaled.width, 20);
console.log("PASS: 7.1 Test");
