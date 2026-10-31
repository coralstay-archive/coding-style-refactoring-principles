// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.4_high_quality_and_time/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { DevelopmentVelocity } from "./main";
import assert from "assert";
const cleanCost = DevelopmentVelocity.calculateCumulativeCost(true, 5);
const badCost = DevelopmentVelocity.calculateCumulativeCost(false, 5);
assert.ok(cleanCost < badCost);
console.log("PASS: 1.4 Test");
