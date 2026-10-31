// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.5_mock_best_practices/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class PriceCalculator {
    total(items: { price: number }[]): number {
        return items.reduce((sum, i) => sum + i.price, 0);
    }
}
console.log("[Good Code 11.5] 총액:", new PriceCalculator().total([{ price: 10 }, { price: 20 }]));
