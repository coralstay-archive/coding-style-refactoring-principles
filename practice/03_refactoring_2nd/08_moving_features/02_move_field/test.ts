// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/02_move_field/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Customer, CustomerContract } from "./main";
import assert from "assert";

const c = new Customer("Kent", new CustomerContract(new Date(), 0.05));
assert.strictEqual(c.applyDiscount(100), 95);
c.becomePreferred();
assert.strictEqual(c.contract.discountRate, 0.08);
assert.strictEqual(c.applyDiscount(100), 92);
console.log("PASS: 8.2 Move Field");
