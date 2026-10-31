// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/06_first_set/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 6] 함수 추출하기 (Extract Function)
export function printOwing(name: string, outstanding: number): string {
    const banner = "***********************\n**** 고객 채무 내역 ****\n***********************";
    const details = `고객명: ${name}\n채무액: ${outstanding}`;
    return `${banner}\n${details}`;
}

console.log(printOwing("Martin", 1500));
