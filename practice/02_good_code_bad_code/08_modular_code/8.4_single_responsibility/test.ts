// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.4_single_responsibility/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { InvoiceData, InvoicePrinter } from "./main";
import assert from "assert";
assert.strictEqual(InvoicePrinter.print(new InvoiceData(100)), "Invoice: $100");
console.log("PASS: 8.4 Test");
