// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.2_null_object_pattern/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { NullLogger } from "./main";
import assert from "assert";
const nl = new NullLogger();
assert.doesNotThrow(() => nl.log("test"));
console.log("PASS: 6.2 Test");
