// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/07_rename_variable/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function calculateCircleArea(radius: number): number {
    const circleRadius = radius;
    return Math.PI * circleRadius * circleRadius;
}
console.log("[Fowler 6.7] Area:", calculateCircleArea(10));
