// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/08_integration_testing/01_managed_vs_unmanaged/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export function shouldMockDependency(isOutOfOurControl: boolean): boolean {
    return isOutOfOurControl; // 비관리 의존성만 모킹
}
console.log("[Khorikov 8.1] 서드파티 결제 모킹 여부:", shouldMockDependency(true));
