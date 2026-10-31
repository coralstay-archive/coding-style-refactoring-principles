// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/03_unit_test_structure/01_aaa_and_fixtures/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class UserAccount {
    constructor(public balance: number) {}
    deposit(amt: number) { this.balance += amt; }
}
console.log("[Khorikov 3.1] 계정 준비 완료");
