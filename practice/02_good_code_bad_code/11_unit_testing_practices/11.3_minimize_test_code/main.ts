// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.3_minimize_test_code/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class SafeMath {
    static clamp(v: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, v));
    }
}
console.log("[Good Code 11.3] 순수 클램프:", SafeMath.clamp(15, 0, 10));
