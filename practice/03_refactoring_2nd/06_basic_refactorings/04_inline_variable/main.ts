// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/04_inline_variable/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function isOverPrice(order: { basePrice: number }): boolean {
    return order.basePrice > 1000;
}
console.log("[Fowler 6.4] Over:", isOverPrice({ basePrice: 1200 }));
