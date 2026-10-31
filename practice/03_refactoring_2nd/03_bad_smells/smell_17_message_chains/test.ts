// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_17_message_chains/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Car } from "./main";
import assert from "assert";
assert.strictEqual(new Car().getHorsepower(), 300);
console.log("PASS: Smell 17 Test");
