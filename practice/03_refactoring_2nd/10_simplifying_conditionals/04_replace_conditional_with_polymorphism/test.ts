// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/04_replace_conditional_with_polymorphism/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { createBird } from "./main";
import assert from "assert";
assert.strictEqual(createBird("european").getSpeed(), 35);
assert.strictEqual(createBird("african").getSpeed(), 40);
console.log("PASS: 10.4 Replace Conditional with Polymorphism");
