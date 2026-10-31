// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_15_speculative_generality/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function addCurrentRequired(a: number, b: number): number { return a + b; }
console.log("[Smell 15] 현재 필요한 최소 구현:", addCurrentRequired(2, 3));
