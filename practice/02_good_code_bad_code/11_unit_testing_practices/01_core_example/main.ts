// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 11] 견고한 가격 할인 계산기
export class DiscountCalculator {
    calculatePrice(originalPrice: number, discountPercentage: number): number {
        if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
            throw new Error("유효하지 않은 가격 또는 할인율입니다.");
        }
        return originalPrice * (1 - discountPercentage / 100);
    }
}

console.log("[Good Code Ch 11] 할인 적용:", new DiscountCalculator().calculatePrice(10000, 20));
