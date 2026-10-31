// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/04_inline_variable/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { isOverPrice } from "./main";
import assert from "assert";
assert.strictEqual(isOverPrice({ basePrice: 1500 }), true);
assert.strictEqual(isOverPrice({ basePrice: 500 }), false);
console.log("PASS: 6.4 Inline Variable");
