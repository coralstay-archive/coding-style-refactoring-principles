// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/02_move_field/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class CustomerContract {
    constructor(public startDate: Date, public discountRate: number) {}
}

export class Customer {
    constructor(public name: string, public contract: CustomerContract) {}

    becomePreferred(): void {
        this.contract.discountRate += 0.03;
    }

    applyDiscount(amount: number): number {
        return amount * (1 - this.contract.discountRate);
    }
}

const c = new Customer("Martin", new CustomerContract(new Date(), 0.1));
console.log("[Fowler 8.2] Discounted:", c.applyDiscount(100));
