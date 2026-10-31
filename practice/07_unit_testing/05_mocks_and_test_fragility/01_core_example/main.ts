// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/05_mocks_and_test_fragility/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export interface IUserRepository {
    getUserEmail(id: number): string; // Stub 대상
}
export interface IEmailGateway {
    sendEmail(to: string, msg: string): void; // Mock 대상 (부수 효과)
}
console.log("[Unit Testing Ch 5] Mock vs Stub 인터페이스 정의");
