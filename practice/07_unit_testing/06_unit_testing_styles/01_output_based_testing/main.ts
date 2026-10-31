// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/01_output_based_testing/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export function applyCoupon(price: number, couponCode: string): number {
    if (couponCode === "VIP10") return price * 0.9;
    return price;
}
console.log("[Khorikov 6.1] 출력 기반:", applyCoupon(100, "VIP10"));
