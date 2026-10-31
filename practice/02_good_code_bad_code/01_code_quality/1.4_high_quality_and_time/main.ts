// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.4_high_quality_and_time/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class DevelopmentVelocity {
    static calculateCumulativeCost(isCleanCode: boolean, iterations: number): number {
        // 클린 코드는 초기 비용 10 후 매회 2 증가, 나쁜 코드는 초기 비용 5 후 매회 5씩 증가(기술 부채)
        let cost = isCleanCode ? 10 : 5;
        const rate = isCleanCode ? 2 : 6;
        for (let i = 1; i <= iterations; i++) cost += rate * i;
        return cost;
    }
}
console.log("[Good Code 1.4] 5회차 누적 비용 - 클린코드:", 
    DevelopmentVelocity.calculateCumulativeCost(true, 5), 
    "나쁜코드:", DevelopmentVelocity.calculateCumulativeCost(false, 5));
