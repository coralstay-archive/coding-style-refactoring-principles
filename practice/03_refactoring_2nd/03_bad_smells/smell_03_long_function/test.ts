// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_03_long_function/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { processInput } from "./main";
import assert from "assert";
assert.strictEqual(processInput("1,2,3"), 6);
console.log("PASS: Smell 03 Test");
