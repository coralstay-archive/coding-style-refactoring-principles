// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_14_lazy_element/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function square(n: number): number { return n * n; }
console.log("[Smell 14] 직관적인 인라인 함수:", square(5));
