// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/06_basic_refactorings/01_extract_function/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function printOwing(customer: string, amount: number): string {
    const banner = printBanner();
    const details = formatDetails(customer, amount);
    return banner + " | " + details;
}
function printBanner(): string { return "*** 고객 채무 보고서 ***"; }
function formatDetails(customer: string, amount: number): string { return "고객명: " + customer + ", 채무액: $" + amount; }
console.log("[Refactoring 6.1] " + printOwing("Martin", 500));
