// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/02_replace_nested_conditional_with_guard_clauses/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function getPayAmount(employee: { isSeparated: boolean; isRetired: boolean; basePay: number }): number {
    if (employee.isSeparated) return 0;
    if (employee.isRetired) return employee.basePay * 0.5;
    return employee.basePay;
}

console.log("[Fowler 10.2] Pay:", getPayAmount({ isSeparated: false, isRetired: true, basePay: 4000 }));
