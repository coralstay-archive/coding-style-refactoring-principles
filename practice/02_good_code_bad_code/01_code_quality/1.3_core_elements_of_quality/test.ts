// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.3_core_elements_of_quality/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { isHighQualityCode } from "./main";
import assert from "assert";
assert.strictEqual(isHighQualityCode({
    readable: true, predictable: true, hardToMisuse: true, modular: true, reusable: true, testable: true
}), true);
console.log("PASS: 1.3 Test");
