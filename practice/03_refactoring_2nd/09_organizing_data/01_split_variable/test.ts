// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/01_split_variable/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { distanceTraveled } from "./main";
import assert from "assert";

const dist = distanceTraveled({ acc1: 2, time1: 2, acc2: 0, time2: 5 });
assert.strictEqual(dist, 24);
console.log("PASS: 9.1 Split Variable");
