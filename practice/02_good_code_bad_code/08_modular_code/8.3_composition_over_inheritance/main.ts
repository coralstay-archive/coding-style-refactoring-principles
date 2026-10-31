// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.3_composition_over_inheritance/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class Engine { start(): string { return "Engine Vroom"; } }
export class Airplane {
    constructor(private engine: Engine) {}
    takeOff(): string { return `${this.engine.start()} -> Fly!`; }
}
console.log("[Good Code 8.3]", new Airplane(new Engine()).takeOff());
