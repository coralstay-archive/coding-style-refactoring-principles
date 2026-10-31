// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_04_long_parameter_list/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { isInRange } from "./main";
import assert from "assert";
const range = { start: new Date("2026-01-01"), end: new Date("2026-12-31") };
assert.strictEqual(isInRange(new Date("2026-06-01"), range), true);
console.log("PASS: Smell 04 Test");
