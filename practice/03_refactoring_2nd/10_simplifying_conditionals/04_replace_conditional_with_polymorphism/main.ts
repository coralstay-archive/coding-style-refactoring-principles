// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/04_replace_conditional_with_polymorphism/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface Bird { getSpeed(): number; }
export class EuropeanSwallow implements Bird { getSpeed(): number { return 35; } }
export class AfricanSwallow implements Bird { getSpeed(): number { return 40; } }
export function createBird(type: string): Bird {
    if (type === "european") return new EuropeanSwallow();
    return new AfricanSwallow();
}
console.log("[Fowler 10.4] Speed:", createBird("european").getSpeed());
