// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_23_refused_bequest/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Bird {
    fly(): string { return "Fly High"; }
}
export class Penguin {
    // Bird를 억지 상속하지 않고 독립 객체로 swim 제공
    swim(): string { return "Swim Fast"; }
}
console.log("[Smell 23] 상속 포기 해결:", new Penguin().swim());
