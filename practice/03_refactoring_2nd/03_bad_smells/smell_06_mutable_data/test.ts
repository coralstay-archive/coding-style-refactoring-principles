// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_06_mutable_data/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { addItem } from "./main";
import assert from "assert";
const orig = [1];
const next = addItem(orig, 2);
assert.deepStrictEqual(orig, [1]);
assert.deepStrictEqual(next, [1, 2]);
console.log("PASS: Smell 06 Test");
