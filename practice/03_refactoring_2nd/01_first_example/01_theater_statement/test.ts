// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/01_first_example/01_theater_statement/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { statement } from "./main";
import assert from "assert";
const res = statement({ customer: "Acme", performances: [{ playID: "hamlet", audience: 35 }] });
assert.ok(res.includes("Acme"));
assert.ok(res.includes("$450"));
console.log("PASS: 1.1 Test");
