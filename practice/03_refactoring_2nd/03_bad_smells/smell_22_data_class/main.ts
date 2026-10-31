// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_22_data_class/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Order {
    constructor(public price: number, public qty: number) {}
    // 데이터 클래스에 비즈니스 행동 부여
    getTotal(): number { return this.price * this.qty; }
}
console.log("[Smell 22] 행동을 가진 Order:", new Order(10, 3).getTotal());
