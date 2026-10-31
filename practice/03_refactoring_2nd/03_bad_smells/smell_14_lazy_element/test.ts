// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_14_lazy_element/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { square } from "./main";
import assert from "assert";
assert.strictEqual(square(4), 16);
console.log("PASS: Smell 14 Test");
