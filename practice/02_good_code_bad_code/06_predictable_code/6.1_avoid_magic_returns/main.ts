// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.1_avoid_magic_returns/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function parseCoordinate(val: string): number | null {
    const num = parseFloat(val);
    if (isNaN(num)) return null; // -1이 아닌 명시적 null
    return num;
}
console.log("[Good Code 6.1]", parseCoordinate("37.5665"));
