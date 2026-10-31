// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Person, Department } from "./main";
import assert from "assert";
const p = new Person("A", new Department("M"));
assert.strictEqual(p.getManagerName(), "M");
console.log("PASS: Ch 07 Test");
