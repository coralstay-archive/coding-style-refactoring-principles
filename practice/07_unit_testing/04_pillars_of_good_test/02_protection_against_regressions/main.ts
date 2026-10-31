// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/02_protection_against_regressions/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export function calculateCompoundInterest(principal: number, rate: number, years: number): number {
    return Math.round(principal * Math.pow(1 + rate, years));
}
console.log("[Khorikov 4.2] Compound:", calculateCompoundInterest(1000, 0.05, 3));
