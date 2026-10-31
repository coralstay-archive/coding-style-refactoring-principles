// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_07_divergent_change/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class FinancialReport {
    constructor(public revenue: number) {}
}
export class ReportPdfRenderer {
    render(r: FinancialReport): string { return `[PDF] Revenue: $${r.revenue}`; }
}
console.log("[Smell 07]", new ReportPdfRenderer().render(new FinancialReport(500)));
