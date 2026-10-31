// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { SecuritySystem } from "./main";
import assert from "assert";
const sec = new SecuritySystem();
const found = sec.findMiscreant(["Alice", "Don"]);
assert.strictEqual(found, "Don");
console.log("PASS: Ch 11 Test");
