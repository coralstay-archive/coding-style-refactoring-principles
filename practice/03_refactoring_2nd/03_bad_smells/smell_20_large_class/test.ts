// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_20_large_class/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { UserProfile } from "./main";
import assert from "assert";
assert.strictEqual(new UserProfile("A").name, "A");
console.log("PASS: Smell 20 Test");
