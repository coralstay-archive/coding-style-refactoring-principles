// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/04_time_leakage/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { SubscriptionService, IDateTimeProvider } from "./main";
import assert from "assert";

class FakeTimeProvider implements IDateTimeProvider {
    constructor(private fixedDate: Date) {}
    now(): Date { return this.fixedDate; }
}

const fakeTime = new FakeTimeProvider(new Date("2026-10-24T12:00:00Z"));
const svc = new SubscriptionService(fakeTime);

assert.ok(svc.isExpired(new Date("2026-10-20T00:00:00Z"))); // 과거: 만료됨
assert.ok(!svc.isExpired(new Date("2026-10-30T00:00:00Z"))); // 미래: 활성 상태
console.log("PASS: 11.4 Time Leakage Solution");
