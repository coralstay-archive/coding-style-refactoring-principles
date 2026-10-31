// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/04_building_tests/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 4] 자가 테스트 가능한 Province 모델
export class Province {
    constructor(public name: string, public demand: number, public price: number) {}

    get shortfall(): number {
        return this.demand - 10;
    }

    get profit(): number {
        return this.demand * this.price;
    }
}

console.log("[Refactoring Ch 4] 수익:", new Province("Asia", 30, 20).profit);
