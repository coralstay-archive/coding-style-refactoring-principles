// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 10] 보호 구문 (Guard Clauses)
export function getPayAmount(isDead: boolean, isSeparated: boolean, isRetired: boolean): number {
    if (isDead) return 0;
    if (isSeparated) return 100;
    if (isRetired) return 200;
    return 300;
}

console.log("[Good Code Ch 10] 기본 급여:", getPayAmount(false, false, false));
