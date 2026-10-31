// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/07_hide_delegate/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Person, Department } from "./main";
import assert from "assert";
const p = new Person(new Department("Martin Fowler"));
assert.strictEqual(p.manager, "Martin Fowler");
console.log("PASS: 7.7 Hide Delegate");
