// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/01_move_function/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class AccountType {
    constructor(public isPremium: boolean) {}

    overdraftCharge(daysOverdrawn: number): number {
        if (this.isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7) return baseCharge;
            return baseCharge + (daysOverdrawn - 7) * 0.85;
        }
        return daysOverdrawn * 1.75;
    }
}

export class Account {
    constructor(public type: AccountType, public daysOverdrawn: number) {}

    get bankCharge(): number {
        let result = 4.5;
        if (this.daysOverdrawn > 0) {
            result += this.type.overdraftCharge(this.daysOverdrawn);
        }
        return result;
    }
}

const acc = new Account(new AccountType(true), 10);
console.log("[Fowler 8.1] Charge:", acc.bankCharge);
