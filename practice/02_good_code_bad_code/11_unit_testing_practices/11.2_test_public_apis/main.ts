// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.2_test_public_apis/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class TextTransformer {
    transform(text: string): string { return text.trim().toLowerCase(); }
}
console.log("[Good Code 11.2] 변환:", new TextTransformer().transform("  HELLO  "));
