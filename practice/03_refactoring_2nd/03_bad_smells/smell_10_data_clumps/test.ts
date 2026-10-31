// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_10_data_clumps/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { GeoPoint } from "./main";
import assert from "assert";
const pt = new GeoPoint(10, 20);
assert.strictEqual(pt.lat, 10);
console.log("PASS: Smell 10 Test");
