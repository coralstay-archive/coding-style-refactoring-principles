// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/08_introduce_parameter_object/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { isWithinRange } from "./main";
import assert from "assert";
assert.ok(isWithinRange(25, { min: 20, max: 30 }));
assert.ok(!isWithinRange(10, { min: 20, max: 30 }));
console.log("PASS: 6.8 Introduce Parameter Object");
