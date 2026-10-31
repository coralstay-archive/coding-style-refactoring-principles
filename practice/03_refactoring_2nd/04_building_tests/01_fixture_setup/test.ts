// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/04_building_tests/01_fixture_setup/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Province } from "./main";
import assert from "assert";
const p = new Province({ name: "Asia", producers: [{ name: "Byzantium", cost: 10, production: 9 }], demand: 30, price: 20 });
assert.strictEqual(p.shortfall, 21);
assert.strictEqual(p.profit, 180);
console.log("PASS: 4.1 Test");
