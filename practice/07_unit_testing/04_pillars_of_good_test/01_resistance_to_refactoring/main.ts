// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/01_resistance_to_refactoring/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class PriceEngine {
    // 내부 구현(루프 또는 내장 함수)이 어떻게 바뀌든 최종 계산 결과만 일치하면 됨
    calcTotal(prices: number[]): number { return prices.reduce((a, b) => a + b, 0); }
}
console.log("[Khorikov 4.1] 리팩터링 내성 엔진");
