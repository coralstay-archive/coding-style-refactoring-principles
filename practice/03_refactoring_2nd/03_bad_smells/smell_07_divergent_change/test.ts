// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_07_divergent_change/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { FinancialReport, ReportPdfRenderer } from "./main";
import assert from "assert";
assert.ok(new ReportPdfRenderer().render(new FinancialReport(100)).includes("100"));
console.log("PASS: Smell 07 Test");
