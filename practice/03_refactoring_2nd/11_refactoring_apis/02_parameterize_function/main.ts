// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/02_parameterize_function/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function raiseSalary(currentSalary: number, factor: number): number {
    return currentSalary * (1 + factor);
}
console.log("[Fowler 11.2] Raise:", raiseSalary(50000, 0.05));
