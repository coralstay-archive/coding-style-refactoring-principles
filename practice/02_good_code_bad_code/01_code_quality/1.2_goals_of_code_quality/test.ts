// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.2_goals_of_code_quality/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { QualityGoals } from "./main";
import assert from "assert";
assert.strictEqual(QualityGoals.evaluate(true, true, true, true), true);
assert.strictEqual(QualityGoals.evaluate(true, false, true, true), false);
console.log("PASS: 1.2 Test");
