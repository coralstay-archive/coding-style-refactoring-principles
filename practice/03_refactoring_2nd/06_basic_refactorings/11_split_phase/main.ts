// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/11_split_phase/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function calculateOrderPrice(rawOrder: string): number {
    const parsed = parseOrder(rawOrder);
    return calculateTotal(parsed);
}
function parseOrder(raw: string): { price: number; count: number } {
    const parts = raw.split(":");
    return { price: parseFloat(parts[0]), count: parseInt(parts[1], 10) };
}
function calculateTotal(data: { price: number; count: number }): number {
    return data.price * data.count;
}
console.log("[Fowler 6.11] Total:", calculateOrderPrice("1500:3"));
