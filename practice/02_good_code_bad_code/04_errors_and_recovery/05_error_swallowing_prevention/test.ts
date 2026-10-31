// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/05_error_swallowing_prevention/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { SafeParser } from "./main";
import assert from "assert";

assert.deepStrictEqual(SafeParser.parseJsonWithContext('{"status": "OK"}'), { status: "OK" });

let caught = false;
try {
    SafeParser.parseJsonWithContext("INVALID_PAYLOAD");
} catch (e: any) {
    caught = true;
    assert.ok(e.message.includes("JSON 파싱 실패"));
}
assert.ok(caught, "Error must NOT be swallowed!");
console.log("PASS: 4.5 Prevent Error Swallowing");
