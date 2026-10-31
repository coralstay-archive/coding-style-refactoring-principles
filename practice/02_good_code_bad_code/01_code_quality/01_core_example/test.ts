// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { evaluateCodeQuality } from "./main";
import assert from "assert";

assert.strictEqual(evaluateCodeQuality({
    isWorking: true, keepsWorking: true, adaptableToChange: true, preventsDuplication: true
}), true);
console.log("PASS: Ch 01 Test");
