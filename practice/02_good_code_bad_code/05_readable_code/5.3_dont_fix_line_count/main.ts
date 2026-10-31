// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.3_dont_fix_line_count/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function isWeekend(dayIndex: number): boolean {
    const isSaturday = (dayIndex === 6);
    const isSunday = (dayIndex === 0);
    return isSaturday || isSunday;
}
console.log("[Good Code 5.3] 토요일 주말 여부:", isWeekend(6));
