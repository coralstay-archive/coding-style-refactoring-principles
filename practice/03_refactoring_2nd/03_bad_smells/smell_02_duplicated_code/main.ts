// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_02_duplicated_code/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function formatHeader(title: string): string {
    return `=== ${title.toUpperCase()} ===`;
}
console.log("[Smell 02]", formatHeader("Report"));
