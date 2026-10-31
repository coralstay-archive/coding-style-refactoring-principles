// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/12_dealing_with_inheritance/01_replace_subclass_with_delegate/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Booking, PremiumBookingDelegate } from "./main";
import assert from "assert";
const normal = new Booking("Hamlet");
assert.strictEqual(normal.price, 100);
assert.strictEqual(normal.hasTalkback, false);
const premium = new Booking("Hamlet", new PremiumBookingDelegate());
assert.strictEqual(premium.price, 150);
assert.strictEqual(premium.hasTalkback, true);
console.log("PASS: 12.1 Test");
