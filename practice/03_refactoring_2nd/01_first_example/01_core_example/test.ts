// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/01_first_example/01_core_example/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { statement } from "./main";
import assert from "assert";

const res = statement({ customer: "Acme", performances: [{ playID: "hamlet", audience: 40 }] });
assert.ok(res.includes("고객명: Acme"));
assert.ok(res.includes("$500"));
console.log("PASS: Ch 01 Test");
