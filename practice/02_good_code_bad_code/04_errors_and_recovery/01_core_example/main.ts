// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 4] 매직값 대신 Result 패턴 활용
export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

export function safeDivide(numerator: number, denominator: number): Result<number, string> {
    if (denominator === 0) {
        return { ok: false, error: "0으로 나눌 수 없습니다 (Divide by zero)." };
    }
    return { ok: true, value: numerator / denominator };
}

console.log("[Good Code Ch 4] 나눗셈:", safeDivide(10, 2));
