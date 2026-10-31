// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/02_parameterize_function/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { raiseSalary } from "./main";
import assert from "assert";
assert.strictEqual(raiseSalary(1000, 0.1), 1100);
assert.strictEqual(raiseSalary(1000, 0.05), 1050);
console.log("PASS: 11.2 Parameterize Function");
