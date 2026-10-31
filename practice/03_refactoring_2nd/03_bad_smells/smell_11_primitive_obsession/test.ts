// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_11_primitive_obsession/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { ZipCode } from "./main";
import assert from "assert";
assert.strictEqual(new ZipCode("06000").code, "06000");
assert.throws(() => new ZipCode("ABC"), /5자리 숫자/);
console.log("PASS: Smell 11 Test");
