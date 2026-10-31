// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/01_decompose_conditional/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function calculateCharge(quantity: number, itemPrice: number, isSummer: boolean): number {
    if (isSummerSeason(isSummer)) {
        return summerCharge(quantity, itemPrice);
    } else {
        return regularCharge(quantity, itemPrice);
    }
}

function isSummerSeason(isSummer: boolean): boolean { return isSummer; }
function summerCharge(qty: number, price: number): number { return qty * price * 0.8; }
function regularCharge(qty: number, price: number): number { return qty * price; }

console.log("[Fowler 10.1] Charge:", calculateCharge(10, 100, true));
