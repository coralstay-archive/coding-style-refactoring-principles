// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.4_checks_and_assertions/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function requireArgument(condition: boolean, message: string): void {
    if (!condition) throw new Error(`[IllegalArgument] ${message}`);
}
export function transferMoney(amount: number): boolean {
    requireArgument(amount > 0, "송금액은 양수여야 합니다.");
    return true;
}
console.log("[Good Code 3.4] 송금 체크:", transferMoney(100));
