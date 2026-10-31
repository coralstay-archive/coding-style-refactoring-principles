// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/11_unit_testing_practices/11.4_boundary_conditions/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function isValidAge(age: number): boolean {
    return age >= 0 && age <= 150;
}
console.log("[Good Code 11.4] 나이 유효성:", isValidAge(25));
