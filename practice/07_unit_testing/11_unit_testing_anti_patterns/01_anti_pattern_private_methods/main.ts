// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/11_unit_testing_anti_patterns/01_anti_pattern_private_methods/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class SafeCalculator {
    private internalSecretMultiplier = 2;
    public calculate(val: number): number { return val * this.internalSecretMultiplier; }
}
console.log("[Khorikov 11.1] 공개 API 결과:", new SafeCalculator().calculate(5));
