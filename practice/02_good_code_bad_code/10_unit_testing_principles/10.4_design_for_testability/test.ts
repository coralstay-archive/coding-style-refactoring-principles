// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/10.4_design_for_testability/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { UserManager } from "./main";
import assert from "assert";
let saved = "";
const mgr = new UserManager({ save: (k, v) => { saved = v; } });
mgr.register("Bob");
assert.strictEqual(saved, "Bob");
console.log("PASS: 10.4 Test");
