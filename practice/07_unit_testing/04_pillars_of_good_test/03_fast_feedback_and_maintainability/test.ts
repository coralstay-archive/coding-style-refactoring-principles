// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/03_fast_feedback_and_maintainability/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { StringSanitizer } from "./main";
import assert from "assert";
const start = Date.now();
for (let i = 0; i < 1000; i++) {
    StringSanitizer.sanitize("  <b>Bold</b>  ");
}
const elapsed = Date.now() - start;
assert.ok(elapsed < 200, "Must be lightning fast under 200ms");
assert.strictEqual(StringSanitizer.sanitize("<p>Text</p>"), "Text");
console.log("PASS: 4.3 Fast Feedback & Maintainability");
