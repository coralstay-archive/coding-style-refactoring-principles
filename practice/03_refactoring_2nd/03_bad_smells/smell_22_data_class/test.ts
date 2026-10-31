// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_22_data_class/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Order } from "./main";
import assert from "assert";
assert.strictEqual(new Order(20, 2).getTotal(), 40);
console.log("PASS: Smell 22 Test");
