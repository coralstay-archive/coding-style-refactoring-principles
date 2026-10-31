// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/05_extract_class/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Person, TelephoneNumber } from "./main";
import assert from "assert";
const p = new Person("Fowler", "031", "999-8888");
assert.strictEqual(p.telephone.toString(), "(031) 999-8888");
console.log("PASS: 7.5 Extract Class");
