// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/02_what_is_unit_test/01_core_example/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { Warehouse } from "./main";
import assert from "assert";
const w = new Warehouse();
w.add("Apple", 10);
assert.strictEqual(w.has("Apple", 5), true);
assert.strictEqual(w.has("Apple", 15), false);
console.log("PASS: Ch 02 Test");
