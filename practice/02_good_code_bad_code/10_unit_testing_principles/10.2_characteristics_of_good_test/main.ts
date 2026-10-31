// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/10.2_characteristics_of_good_test/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class PureAlgorithm {
    static isEven(n: number): boolean { return n % 2 === 0; }
}
console.log("[Good Code 10.2] 결정론적 판별:", PureAlgorithm.isEven(4));
