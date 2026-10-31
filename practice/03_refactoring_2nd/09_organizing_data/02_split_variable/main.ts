// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/02_split_variable/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function computeDistance(acc: number, time: number): number {
    const primaryDistance = 0.5 * acc * time * time;
    return primaryDistance;
}
console.log("[Fowler 9.1] Dist:", computeDistance(9.8, 2));
