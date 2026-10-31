// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/05_catalog_intro/01_catalog_structure/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { sampleRefactoring } from "./main";
import assert from "assert";
assert.strictEqual(sampleRefactoring.name, "함수 추출하기");
assert.strictEqual(sampleRefactoring.mechanics.length, 4);
console.log("PASS: 5.1 Test");
