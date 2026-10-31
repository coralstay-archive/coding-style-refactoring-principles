// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.7_no_magic_values/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export const SECONDS_PER_MINUTE = 60;
export const MINUTES_PER_HOUR = 60;
export function hoursToSeconds(hours: number): number {
    return hours * MINUTES_PER_HOUR * SECONDS_PER_MINUTE;
}
console.log("[Good Code 5.7] 2시간은 몇 초인가:", hoursToSeconds(2));
