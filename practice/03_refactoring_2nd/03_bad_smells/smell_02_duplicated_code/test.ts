// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_02_duplicated_code/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { formatHeader } from "./main";
import assert from "assert";
assert.strictEqual(formatHeader("menu"), "=== MENU ===");
console.log("PASS: Smell 02 Test");
