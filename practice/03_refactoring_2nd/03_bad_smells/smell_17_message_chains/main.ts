// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_17_message_chains/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Engine { getHorsepower(): number { return 300; } }
export class Car {
    private engine = new Engine();
    getHorsepower(): number { return this.engine.getHorsepower(); }
}
console.log("[Smell 17] 위임 숨기기 마력:", new Car().getHorsepower());
