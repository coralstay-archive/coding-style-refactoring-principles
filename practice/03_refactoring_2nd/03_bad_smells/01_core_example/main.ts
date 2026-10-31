// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 3] 기능 편애(Feature Envy) 악취 진단
export class Customer {
    constructor(public readonly city: string, public readonly zip: string) {}
}

export class Order {
    constructor(private readonly customer: Customer) {}

    // 악취 해소: Customer의 데이터를 직접 뒤지지 않고 위임
    getCustomerLocation(): string {
        return `${this.customer.city} (${this.customer.zip})`;
    }
}

console.log(new Order(new Customer("Seoul", "06000")).getCustomerLocation());
