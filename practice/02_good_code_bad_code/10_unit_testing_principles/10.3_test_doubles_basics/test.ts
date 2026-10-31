// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/10.3_test_doubles_basics/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { WeatherAdvisor } from "./main";
import assert from "assert";
const advisor = new WeatherAdvisor({ getTemp: () => 35 });
assert.strictEqual(advisor.isHot("Seoul"), true);
console.log("PASS: 10.3 Test");
