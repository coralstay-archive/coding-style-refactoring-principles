// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

// 출력 기반 테스트: 숨은 입출력이 없는 순수 함수
export function calculateDiscount(price: number, percent: number): number {
    return price * (1 - percent / 100);
}
console.log("[Unit Testing Ch 6] 출력 기반:", calculateDiscount(100, 10));
