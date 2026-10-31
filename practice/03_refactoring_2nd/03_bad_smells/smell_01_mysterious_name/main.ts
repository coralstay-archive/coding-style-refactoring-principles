// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_01_mysterious_name/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function calculateMonthlyNetIncome(grossRevenue: number, totalExpenses: number): number {
    return grossRevenue - totalExpenses;
}
console.log("[Smell 01] 명확한 순이익 계산:", calculateMonthlyNetIncome(10000, 3000));
