// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/02_principles/02_when_to_refactor/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { shouldRefactor } from "./main";
import assert from "assert";
assert.strictEqual(shouldRefactor(2), false);
assert.strictEqual(shouldRefactor(3), true);
console.log("PASS: 2.2 Test");
