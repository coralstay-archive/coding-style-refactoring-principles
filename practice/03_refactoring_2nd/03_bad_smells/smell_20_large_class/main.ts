// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_20_large_class/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class UserProfile { constructor(public name: string) {} }
export class UserAuth { constructor(public passwordHash: string) {} }
console.log("[Smell 20] 책임 분리 완료");
