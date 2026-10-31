// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/08_integration_testing/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class IntegrationPolicy {
    static shouldMock(isManaged: boolean): boolean {
        // 관리 의존성(DB)은 실제 인스턴스 사용, 비관리 의존성은 Mock
        return !isManaged;
    }
}
console.log("[Unit Testing Ch 8] Mock 여부 판별:", IntegrationPolicy.shouldMock(false));
