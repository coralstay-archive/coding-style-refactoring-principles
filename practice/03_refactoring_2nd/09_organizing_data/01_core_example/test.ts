// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { potentialEnergy, GRAVITATIONAL_CONSTANT } from "./main";
import assert from "assert";
assert.strictEqual(potentialEnergy(1, 1), GRAVITATIONAL_CONSTANT);
console.log("PASS: Ch 09 Test");
