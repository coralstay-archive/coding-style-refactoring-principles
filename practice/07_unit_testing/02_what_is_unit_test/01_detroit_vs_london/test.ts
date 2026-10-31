// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/02_what_is_unit_test/01_detroit_vs_london/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { Warehouse, OrderService } from "./main";
import assert from "assert";
const w = new Warehouse();
w.add("Book", 10);
const svc = new OrderService();
assert.strictEqual(svc.purchase(w, "Book", 4), true);
assert.strictEqual(w.has("Book", 6), true);
console.log("PASS: 2.1 Test");
