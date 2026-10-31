// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/01_guard_clauses/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function getPayAmount(employee: { isDead: boolean; isSeparated: boolean; isRetired: boolean }): number {
    if (employee.isDead) return deadAmount();
    if (employee.isSeparated) return separatedAmount();
    if (employee.isRetired) return retiredAmount();
    return normalAmount();
}
function deadAmount() { return 1000; }
function separatedAmount() { return 2000; }
function retiredAmount() { return 3000; }
function normalAmount() { return 5000; }
console.log("[Refactoring 10.1] 보호 구문 급여 계산:", getPayAmount({ isDead: false, isSeparated: false, isRetired: true }));
