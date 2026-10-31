// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_18_middle_man/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { DirectTarget } from "./main";
import assert from "assert";
assert.strictEqual(new DirectTarget().action(), "Direct Action");
console.log("PASS: Smell 18 Test");
