// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/05_introduce_special_case/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { getCustomer } from "./main";
import assert from "assert";
assert.strictEqual(getCustomer(false).name, "거주자 (Unknown)");
assert.strictEqual(getCustomer(true).name, "홍길동");
console.log("PASS: 10.5 Introduce Special Case");
