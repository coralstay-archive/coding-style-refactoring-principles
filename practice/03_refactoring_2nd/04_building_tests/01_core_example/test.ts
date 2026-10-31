// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/04_building_tests/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Province } from "./main";
import assert from "assert";
const p = new Province("Asia", 30, 20);
assert.strictEqual(p.shortfall, 20);
assert.strictEqual(p.profit, 600);
console.log("PASS: Ch 04 Test");
