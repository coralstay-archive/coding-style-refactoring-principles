// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/07_refactoring_for_valuable_tests/01_humble_object_pattern/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class DomainLogic {
    static canProcess(balance: number, amount: number): boolean {
        return balance >= amount && amount > 0;
    }
}
console.log("[Khorikov 7.1] 순수 도메인 판단:", DomainLogic.canProcess(100, 50));
