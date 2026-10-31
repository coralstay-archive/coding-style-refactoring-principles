// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.4_consistent_coding_style/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { FormattingRules } from "./main";
import assert from "assert";
assert.ok(FormattingRules.getStyleGuideline().includes("Standard"));
console.log("PASS: 5.4 Test");
