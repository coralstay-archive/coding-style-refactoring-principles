// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.2_robustness_vs_failure/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function parsePositiveInt(val: string): number {
    const n = Number(val);
    if (isNaN(n) || n <= 0) {
        throw new Error(`[Fail-Fast] 유효하지 않은 양의 정수입니다: '${val}'`);
    }
    return n;
}
console.log("[Good Code 4.2] 파싱:", parsePositiveInt("42"));
