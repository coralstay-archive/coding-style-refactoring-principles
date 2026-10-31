// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/02_output_based_testing/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class PriceDiscountCalculator {
    static calculate(price: number, isVip: boolean): number {
        if (price <= 0) return 0;
        return isVip ? price * 0.8 : price * 0.95;
    }
}
console.log("[Khorikov 6.2] VIP Price:", PriceDiscountCalculator.calculate(1000, true));
