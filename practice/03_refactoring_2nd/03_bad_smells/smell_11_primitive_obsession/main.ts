// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_11_primitive_obsession/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class ZipCode {
    constructor(public code: string) {
        if (!/^\d{5}$/.test(code)) throw new Error("우편번호는 5자리 숫자여야 합니다.");
    }
}
console.log("[Smell 11] 도메인 우편번호:", new ZipCode("12345").code);
