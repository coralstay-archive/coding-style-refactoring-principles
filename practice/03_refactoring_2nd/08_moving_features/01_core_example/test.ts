// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { acquireTotalActiveRevenue } from "./main";
import assert from "assert";
const total = acquireTotalActiveRevenue([{ amount: 10, isActive: true }, { amount: 20, isActive: true }]);
assert.strictEqual(total, 30);
console.log("PASS: Ch 08 Test");
