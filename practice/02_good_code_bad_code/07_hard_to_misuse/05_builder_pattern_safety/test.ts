// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/05_builder_pattern_safety/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { HttpRequestBuilder } from "./main";
import assert from "assert";

const req = new HttpRequestBuilder()
    .setUrl("https://api.example.com/data")
    .setMethod("POST")
    .addHeader("Content-Type", "application/json")
    .setBody('{"user": "tom"}')
    .build();

assert.strictEqual(req.url, "https://api.example.com/data");
assert.strictEqual(req.method, "POST");
assert.strictEqual(req.headers["Content-Type"], "application/json");

// 필수값 누락 시 안전한 방어
assert.throws(() => new HttpRequestBuilder().build(), /URL은 필수입니다/);
console.log("PASS: 7.5 Type-Safe Builder Pattern");
