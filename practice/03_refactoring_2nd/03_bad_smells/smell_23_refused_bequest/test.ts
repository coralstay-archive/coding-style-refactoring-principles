// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_23_refused_bequest/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Penguin } from "./main";
import assert from "assert";
assert.strictEqual(new Penguin().swim(), "Swim Fast");
console.log("PASS: Smell 23 Test");
