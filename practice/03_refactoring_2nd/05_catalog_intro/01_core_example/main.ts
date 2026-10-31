// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/05_catalog_intro/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function describeRefactoring(name: string, motivation: string): string {
    return `[Refactoring: ${name}] - ${motivation}`;
}
console.log(describeRefactoring("Extract Function", "코드 가독성 향상 및 중복 제거"));
