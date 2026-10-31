// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/08_introduce_parameter_object/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface NumberRange { min: number; max: number; }
export function isWithinRange(val: number, range: NumberRange): boolean {
    return val >= range.min && val <= range.max;
}
console.log("[Fowler 6.8] Within:", isWithinRange(25, { min: 20, max: 30 }));
