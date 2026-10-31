// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/04_replace_temp_with_query/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Order {
    constructor(private quantity: number, private itemPrice: number) {}
    get basePrice(): number { return this.quantity * this.itemPrice; }
    get discountFactor(): number { return this.basePrice > 1000 ? 0.95 : 0.98; }
    get finalPrice(): number { return this.basePrice * this.discountFactor; }
}
const o = new Order(10, 150);
console.log("[Fowler 7.4] Final:", o.finalPrice);
