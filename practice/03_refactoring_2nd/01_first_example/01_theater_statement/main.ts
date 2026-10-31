// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/01_first_example/01_theater_statement/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface Performance { playID: string; audience: number; }
export interface Invoice { customer: string; performances: Performance[]; }
export function statement(invoice: Invoice): string {
    let total = 0;
    for (const perf of invoice.performances) {
        let amount = 40000;
        if (perf.audience > 30) amount += 1000 * (perf.audience - 30);
        total += amount;
    }
    return `청구서 (${invoice.customer}): $${total / 100}`;
}
console.log("[Refactoring 1.1]", statement({ customer: "BigCo", performances: [{ playID: "hamlet", audience: 50 }] }));
