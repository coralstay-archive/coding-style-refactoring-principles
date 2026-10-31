// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.3_core_elements_of_quality/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface QualityPillars {
    readable: boolean;
    predictable: boolean;
    hardToMisuse: boolean;
    modular: boolean;
    reusable: boolean;
    testable: boolean;
}
export function isHighQualityCode(p: QualityPillars): boolean {
    return Object.values(p).every(v => v === true);
}
console.log("[Good Code 1.3] 6대 요소 충족:", isHighQualityCode({
    readable: true, predictable: true, hardToMisuse: true, modular: true, reusable: true, testable: true
}));
