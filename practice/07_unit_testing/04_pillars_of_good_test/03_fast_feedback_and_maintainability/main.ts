// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/03_fast_feedback_and_maintainability/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class StringSanitizer {
    static sanitize(input: string): string {
        return input.trim().replace(/<[^>]*>/g, "");
    }
}
console.log("[Khorikov 4.3] Clean:", StringSanitizer.sanitize("  <script>alert(1)</script> Hello "));
