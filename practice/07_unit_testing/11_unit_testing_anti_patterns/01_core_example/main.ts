// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class AntiPatternGuide {
    static avoidPrivateTesting(): string {
        return "비공개(Private) 메서드를 직접 테스트하지 말고 공개 API를 통해 간접 검증하라.";
    }
}
console.log("[Unit Testing Ch 11] " + AntiPatternGuide.avoidPrivateTesting());
