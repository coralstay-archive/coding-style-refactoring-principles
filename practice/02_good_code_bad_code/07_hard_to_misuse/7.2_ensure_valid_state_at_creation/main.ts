// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.2_ensure_valid_state_at_creation/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class MoneyAmount {
    constructor(public readonly amount: number, public readonly currency: string) {
        if (amount < 0) throw new Error("금액은 음수일 수 없습니다.");
        if (!currency || currency.length !== 3) throw new Error("통화 코드는 3자리여야 합니다.");
    }
}
console.log("[Good Code 7.2] 통화 생성:", new MoneyAmount(100, "USD"));
