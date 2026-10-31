// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/12_dealing_with_inheritance/02_pull_up_method/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Engineer, Manager } from "./main";
import assert from "assert";
const eng = new Engineer("Beck");
const mgr = new Manager("Fowler");
assert.strictEqual(eng.getIdBadge(), "ID-BECK");
assert.strictEqual(mgr.getIdBadge(), "ID-FOWLER");
console.log("PASS: 12.1 Pull Up Method");
