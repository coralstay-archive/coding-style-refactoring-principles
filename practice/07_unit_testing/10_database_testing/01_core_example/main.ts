// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/10_database_testing/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class DatabaseTestPolicy {
    static getCleanupStrategy(): string {
        return "각 테스트 실행 전 데이터 초기화 (Fast State Wipe)";
    }
}
console.log("[Unit Testing Ch 10] DB 정리 정책:", DatabaseTestPolicy.getCleanupStrategy());
