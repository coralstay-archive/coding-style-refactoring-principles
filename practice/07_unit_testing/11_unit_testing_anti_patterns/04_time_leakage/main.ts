// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/04_time_leakage/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export interface IDateTimeProvider { now(): Date; }

export class SubscriptionService {
    constructor(private timeProvider: IDateTimeProvider) {}
    isExpired(expiryDate: Date): boolean {
        return this.timeProvider.now().getTime() > expiryDate.getTime();
    }
}
console.log("[Khorikov 11.4] Time Provider pattern");
