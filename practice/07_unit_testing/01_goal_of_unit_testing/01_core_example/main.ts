// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/01_goal_of_unit_testing/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class ProjectHealth {
    static isSustainable(coverage: number, refactoringResistance: boolean): boolean {
        return coverage >= 70 && refactoringResistance;
    }
}
console.log("[Unit Testing Ch 1] 지속 가능성 판정:", ProjectHealth.isSustainable(85, true));
