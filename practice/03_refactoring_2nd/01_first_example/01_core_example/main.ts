// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/01_first_example/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 1] 연극 공연 청구서 계산 및 포맷 분리
export interface Performance {
    playID: string;
    audience: number;
}

export interface Invoice {
    customer: string;
    performances: Performance[];
}

export function statement(invoice: Invoice): string {
    let totalAmount = 0;
    for (const perf of invoice.performances) {
        let thisAmount = 40000;
        if (perf.audience > 30) {
            thisAmount += 1000 * (perf.audience - 30);
        }
        totalAmount += thisAmount;
    }
    return `청구 내역 (고객명: ${invoice.customer})\n총액: $${totalAmount / 100}\n`;
}

console.log(statement({ customer: "BigCo", performances: [{ playID: "hamlet", audience: 55 }] }));
