// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/02_decompose_conditional/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function getTicketPrice(date: Date, quantity: number): number {
    return isSummer(date) ? summerCharge(quantity) : regularCharge(quantity);
}
function isSummer(date: Date): boolean { return date.getMonth() >= 5 && date.getMonth() <= 7; }
function summerCharge(quantity: number): number { return quantity * 70; }
function regularCharge(quantity: number): number { return quantity * 100; }
console.log("[Fowler 10.1] Ticket:", getTicketPrice(new Date(2026, 6, 1), 2));
