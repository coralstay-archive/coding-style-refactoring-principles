// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/03_consolidate_conditional_expression/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function disabilityAmount(employee: { seniority: number; monthsDisabled: number; isPartTime: boolean }): number {
    if (isNotEligibleForDisability(employee)) return 0;
    return 1000;
}
function isNotEligibleForDisability(e: { seniority: number; monthsDisabled: number; isPartTime: boolean }): boolean {
    return (e.seniority < 2) || (e.monthsDisabled > 12) || (e.isPartTime);
}
console.log("[Fowler 10.2] Eligible:", disabilityAmount({ seniority: 3, monthsDisabled: 5, isPartTime: false }));
