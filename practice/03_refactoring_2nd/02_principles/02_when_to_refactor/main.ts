// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/02_principles/02_when_to_refactor/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function shouldRefactor(taskOccurrence: number): boolean {
    return taskOccurrence >= 3;
}
console.log("[Refactoring 2.2] 리팩터링 시점 판정:", shouldRefactor(3));
