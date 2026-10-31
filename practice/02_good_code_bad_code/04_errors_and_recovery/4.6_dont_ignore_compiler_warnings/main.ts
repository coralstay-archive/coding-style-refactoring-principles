// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.6_dont_ignore_compiler_warnings/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function checkWarningLevel(treatWarningsAsErrors: boolean): string {
    return treatWarningsAsErrors ? "STRICT_MODE_ACTIVE" : "RISKY_PERMISSIVE_MODE";
}
console.log("[Good Code 4.6]", checkWarningLevel(true));
