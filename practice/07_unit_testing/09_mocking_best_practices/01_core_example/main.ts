// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/09_mocking_best_practices/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class SmtpClient {
    send(body: string): boolean { return true; }
}
console.log("[Unit Testing Ch 9] 시스템 경계 목킹 대상");
