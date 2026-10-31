// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/03_immutable_value_objects/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class MoneyAmount {
    readonly currency: string;
    readonly amount: number;

    constructor(amount: number, currency: string) {
        if (amount < 0) throw new Error("금액은 음수일 수 없습니다.");
        this.amount = amount;
        this.currency = currency;
        Object.freeze(this);
    }

    add(other: MoneyAmount): MoneyAmount {
        if (this.currency !== other.currency) {
            throw new Error(`통화가 일치하지 않습니다: ${this.currency} vs ${other.currency}`);
        }
        return new MoneyAmount(this.amount + other.amount, this.currency);
    }
}

const m1 = new MoneyAmount(100, "USD");
const m2 = new MoneyAmount(50, "USD");
console.log("[Good Code 7.3] Total:", m1.add(m2).amount);
