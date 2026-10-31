// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/11_anti_patterns/01_time_dependency_injection/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export interface DateTimeProvider {
    now(): Date;
}

export class OrderCancellationPolicy {
    constructor(private readonly clock: DateTimeProvider) {}

    canCancel(orderDate: Date): boolean {
        const currentTime = this.clock.now().getTime();
        const diffHours = (currentTime - orderDate.getTime()) / (1000 * 60 * 60);
        return diffHours <= 24; // 24시간 이내만 취소 가능
    }
}

console.log("[Khorikov 11.1] Clock Policy Ready");
