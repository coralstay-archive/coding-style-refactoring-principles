// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/05_catalog_intro/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { describeRefactoring } from "./main";
import assert from "assert";
assert.ok(describeRefactoring("A", "B").includes("Extract Function") === false);
console.log("PASS: Ch 05 Test");
