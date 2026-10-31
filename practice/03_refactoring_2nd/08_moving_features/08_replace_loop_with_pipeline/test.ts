// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/08_replace_loop_with_pipeline/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { acquireIndianCompanyNames } from "./main";
import assert from "assert";
const input = [
    { name: "Google", country: "USA" },
    { name: "Infosys", country: "India" },
    { name: "Wipro", country: "India" }
];
assert.deepStrictEqual(acquireIndianCompanyNames(input), ["Infosys", "Wipro"]);
console.log("PASS: 8.8 Replace Loop with Pipeline");
