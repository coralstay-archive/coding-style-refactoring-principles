// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/07_refactoring_for_valuable_tests/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

// 험블 객체 패턴: 도메인 로직을 순수 엔티티로 격리
export class UserDomain {
    static canChangeEmail(isEmailConfirmed: boolean): boolean {
        return !isEmailConfirmed;
    }
}
console.log("[Unit Testing Ch 7] 험블 객체 도메인 로직");
