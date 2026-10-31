// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/10_database_testing/01_transaction_isolation/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { InMemoryDb } from "./main";
import assert from "assert";
const db = new InMemoryDb();
db.insert("orders", { id: 101, amount: 50 });
assert.strictEqual(db.count("orders"), 1);
db.cleanup();
assert.strictEqual(db.count("orders"), 0);
console.log("PASS: 10.1 Test");
