// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.4_single_responsibility/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class InvoiceData { constructor(public total: number) {} }
export class InvoicePrinter {
    static print(inv: InvoiceData): string { return `Invoice: $${inv.total}`; }
}
console.log("[Good Code 8.4]", InvoicePrinter.print(new InvoiceData(500)));
