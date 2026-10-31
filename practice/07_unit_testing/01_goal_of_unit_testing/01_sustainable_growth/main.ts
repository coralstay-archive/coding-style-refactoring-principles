// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/01_goal_of_unit_testing/01_sustainable_growth/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class ProjectMetrics {
    static isHealthy(regressionRate: number, testSpeedMs: number): boolean {
        return regressionRate < 0.01 && testSpeedMs < 1000;
    }
}
console.log("[Khorikov 1.1] 프로젝트 건강도:", ProjectMetrics.isHealthy(0.005, 200));
