// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/02_principles/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { RefactoringPrinciples } from "./main";
import assert from "assert";
assert.strictEqual(RefactoringPrinciples.shouldRefactor(3), true);
assert.strictEqual(RefactoringPrinciples.shouldRefactor(2), false);
console.log("PASS: Ch 02 Test");
