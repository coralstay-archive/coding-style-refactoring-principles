// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_01_mysterious_name/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { calculateMonthlyNetIncome } from "./main";
import assert from "assert";
assert.strictEqual(calculateMonthlyNetIncome(5000, 2000), 3000);
console.log("PASS: Smell 01 Test");
