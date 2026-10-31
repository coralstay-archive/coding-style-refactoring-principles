// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.1_code_of_others/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { LegacyDoc } from "./main";
import assert from "assert";
assert.ok(LegacyDoc.getExplanation("Tom", 12).includes("명시적 계약"));
console.log("PASS: 3.1 Test");
