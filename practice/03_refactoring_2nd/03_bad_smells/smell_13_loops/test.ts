// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_13_loops/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { getActiveUserNames } from "./main";
import assert from "assert";
assert.deepStrictEqual(getActiveUserNames([{ name: "A", active: true }, { name: "B", active: false }]), ["A"]);
console.log("PASS: Smell 13 Test");
