// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.3_careful_defaults/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { validateConnection } from "./main";
import assert from "assert";
assert.strictEqual(validateConnection({ host: "localhost", port: 8080 }), true);
console.log("PASS: 9.3 Test");
