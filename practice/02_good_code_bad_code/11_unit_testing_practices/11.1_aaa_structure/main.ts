// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.1_aaa_structure/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class Counter {
    private c = 0;
    inc() { this.c++; }
    val() { return this.c; }
}
console.log("[Good Code 11.1] 카운터 준비");
