// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_12_repeated_switches/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface Animal { speak(): string; }
export class Dog implements Animal { speak(): string { return "멍멍"; } }
export class Cat implements Animal { speak(): string { return "야옹"; } }
console.log("[Smell 12]", new Dog().speak());
