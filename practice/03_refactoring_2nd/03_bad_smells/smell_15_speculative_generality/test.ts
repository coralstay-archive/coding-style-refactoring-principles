// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_15_speculative_generality/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { addCurrentRequired } from "./main";
import assert from "assert";
assert.strictEqual(addCurrentRequired(1, 2), 3);
console.log("PASS: Smell 15 Test");
