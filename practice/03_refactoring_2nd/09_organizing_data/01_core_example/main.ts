// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 9] 매직 리터럴 상수화
export const GRAVITATIONAL_CONSTANT = 9.81;

export function potentialEnergy(massKg: number, heightMeters: number): number {
    return massKg * GRAVITATIONAL_CONSTANT * heightMeters;
}

console.log("[Good Code Ch 9] 위치 에너지:", potentialEnergy(10, 5));
