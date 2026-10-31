// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/11_anti_patterns/01_time_dependency_injection/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { OrderCancellationPolicy, DateTimeProvider } from "./main";
import assert from "assert";

class FakeClock implements DateTimeProvider {
    constructor(private fakeDate: Date) {}
    now(): Date { return this.fakeDate; }
}

const baseTime = new Date("2026-05-01T12:00:00Z");
const fakeClock = new FakeClock(baseTime);
const policy = new OrderCancellationPolicy(fakeClock);

// 10시간 전 주문 (취소 가능)
const recentOrder = new Date("2026-05-01T02:00:00Z");
assert.strictEqual(policy.canCancel(recentOrder), true);

// 30시간 전 주문 (취소 불가)
const oldOrder = new Date("2026-04-30T06:00:00Z");
assert.strictEqual(policy.canCancel(oldOrder), false);
console.log("PASS: 11.1 Time Dependency Injection");
