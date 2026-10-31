// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.5_avoid_misleading_functions/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { fetchUserOrNull } from "./main";
import assert from "assert";
assert.strictEqual(fetchUserOrNull(-1), null);
assert.strictEqual(fetchUserOrNull(5)?.name, "User_5");
console.log("PASS: 6.5 Test");
