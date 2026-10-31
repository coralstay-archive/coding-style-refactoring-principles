// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/02_inline_function/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function getRating(driver: { lateDeliveries: number }): number {
    return driver.lateDeliveries > 5 ? 2 : 1;
}
console.log("[Fowler 6.2] Rating:", getRating({ lateDeliveries: 3 }));
