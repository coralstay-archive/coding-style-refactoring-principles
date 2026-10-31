// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/01_fail_fast_validation/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function calculateMonthlyPayment(principal: number, months: number): number {
    if (principal <= 0) throw new Error("대출 원금은 0보다 커야 합니다.");
    if (months <= 0) throw new Error("대출 기간은 1개월 이상이어야 합니다.");
    return Math.round(principal / months);
}

console.log("[Good Code 6.1] Payment:", calculateMonthlyPayment(1200, 12));
