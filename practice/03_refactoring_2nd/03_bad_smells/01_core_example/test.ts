// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Order, Customer } from "./main";
import assert from "assert";
const ord = new Order(new Customer("Busan", "48000"));
assert.strictEqual(ord.getCustomerLocation(), "Busan (48000)");
console.log("PASS: Ch 03 Test");
