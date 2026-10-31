// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_24_comments/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function isAdult(age: number): boolean { return age >= 19; }
console.log("[Smell 24] 주석 없이 의도가 자명한 함수:", isAdult(20));
