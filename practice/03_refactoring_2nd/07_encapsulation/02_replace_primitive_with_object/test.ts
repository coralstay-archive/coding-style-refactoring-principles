// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/02_replace_primitive_with_object/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Priority, Order } from "./main";
import assert from "assert";

const pNormal = new Priority("normal");
const pHigh = new Priority("high");

assert.strictEqual(pHigh.higherThan(pNormal), true);
assert.strictEqual(pNormal.higherThan(pHigh), false);
assert.throws(() => new Priority("invalid"));
console.log("PASS: 7.2 Replace Primitive with Object");
