// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_09_feature_envy/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Address } from "./main";
import assert from "assert";
assert.strictEqual(new Address("Busan", "555").format(), "Busan (555)");
console.log("PASS: Smell 09 Test");
