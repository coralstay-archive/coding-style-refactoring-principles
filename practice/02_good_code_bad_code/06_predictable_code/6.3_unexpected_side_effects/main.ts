// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.3_unexpected_side_effects/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class BankLedger {
    private balance = 1000;
    // 순수 조회 함수: balance를 변경하지 않음
    getBalance(): number { return this.balance; }
    withdraw(amount: number): void { this.balance -= amount; }
}
console.log("[Good Code 6.3] 원장 잔액:", new BankLedger().getBalance());
