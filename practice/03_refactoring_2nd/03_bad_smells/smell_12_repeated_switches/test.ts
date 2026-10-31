// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_12_repeated_switches/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Dog, Cat } from "./main";
import assert from "assert";
assert.strictEqual(new Dog().speak(), "멍멍");
assert.strictEqual(new Cat().speak(), "야옹");
console.log("PASS: Smell 12 Test");
