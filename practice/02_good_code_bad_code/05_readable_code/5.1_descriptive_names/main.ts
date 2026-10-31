// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.1_descriptive_names/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function calculateElapsedDays(startTimestampMs: number, endTimestampMs: number): number {
    const ONE_DAY_MS = 1000 * 60 * 60 * 24;
    return Math.floor((endTimestampMs - startTimestampMs) / ONE_DAY_MS);
}
console.log("[Good Code 5.1] 경과 일수:", calculateElapsedDays(1000, 1000 + 86400000 * 3));
