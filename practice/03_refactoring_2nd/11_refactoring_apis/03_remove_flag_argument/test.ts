// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/03_remove_flag_argument/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { DeliveryService } from "./main";
import assert from "assert";
assert.strictEqual(DeliveryService.bookRegularDelivery(), "Standard Delivery (3 Days)");
assert.strictEqual(DeliveryService.bookRushDelivery(), "Rush Delivery (Next Day)");
console.log("PASS: 11.3 Remove Flag Argument");
