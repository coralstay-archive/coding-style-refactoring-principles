// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/02_exposing_private_state/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class BankAccount {
    private balance: number = 0; // 비공개 캡슐화 유지
    deposit(amount: number): boolean {
        if (amount <= 0) return false;
        this.balance += amount;
        return true;
    }
    withdraw(amount: number): boolean {
        if (amount <= 0 || amount > this.balance) return false;
        this.balance -= amount;
        return true;
    }
    getStatement(): string {
        return `Current Balance: $${this.balance}`;
    }
}
console.log("[Khorikov 11.2] Account ready");
