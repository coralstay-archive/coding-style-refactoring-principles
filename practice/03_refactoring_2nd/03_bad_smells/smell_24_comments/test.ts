// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_24_comments/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { isAdult } from "./main";
import assert from "assert";
assert.strictEqual(isAdult(19), true);
assert.strictEqual(isAdult(18), false);
console.log("PASS: Smell 24 Test");
