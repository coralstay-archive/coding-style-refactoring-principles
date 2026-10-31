// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/01_explain_boolean_expression/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { canAccessAdminPanel } from "./main";
import assert from "assert";

assert.strictEqual(canAccessAdminPanel({ role: "SUPER_ADMIN", isMfaEnabled: false, ipAllowed: false }), true);
assert.strictEqual(canAccessAdminPanel({ role: "USER", isMfaEnabled: true, ipAllowed: true }), true);
assert.strictEqual(canAccessAdminPanel({ role: "USER", isMfaEnabled: true, ipAllowed: false }), false);
console.log("PASS: 5.1 Explain Boolean Expression");
