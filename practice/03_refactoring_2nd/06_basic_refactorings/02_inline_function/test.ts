// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/02_inline_function/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { getRating } from "./main";
import assert from "assert";
assert.strictEqual(getRating({ lateDeliveries: 10 }), 2);
assert.strictEqual(getRating({ lateDeliveries: 2 }), 1);
console.log("PASS: 6.2 Inline Function");
