// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.2_avoid_global_state/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { ConfigContext, getDbUrl } from "./main";
import assert from "assert";
assert.strictEqual(getDbUrl(new ConfigContext("stage")), "db://stage.internal");
console.log("PASS: 9.2 Test");
