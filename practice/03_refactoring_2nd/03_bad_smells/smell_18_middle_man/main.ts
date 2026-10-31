// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_18_middle_man/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class DirectTarget { action(): string { return "Direct Action"; } }
console.log("[Smell 18] 직접 호출:", new DirectTarget().action());
