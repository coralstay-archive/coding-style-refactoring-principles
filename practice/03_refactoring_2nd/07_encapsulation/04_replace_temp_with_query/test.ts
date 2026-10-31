// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/04_replace_temp_with_query/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Order } from "./main";
import assert from "assert";
assert.strictEqual(new Order(10, 100).finalPrice, 980);
assert.strictEqual(new Order(10, 200).finalPrice, 1900);
console.log("PASS: 7.4 Replace Temp with Query");
