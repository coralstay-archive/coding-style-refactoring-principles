// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/07_rename_variable/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { calculateCircleArea } from "./main";
import assert from "assert";
const area = calculateCircleArea(2);
assert.ok(Math.abs(area - 12.566) < 0.01);
console.log("PASS: 6.7 Rename Variable");
