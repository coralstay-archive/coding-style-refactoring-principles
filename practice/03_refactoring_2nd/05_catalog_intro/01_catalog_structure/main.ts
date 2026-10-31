// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/05_catalog_intro/01_catalog_structure/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface RefactoringStep {
    name: string;
    motivation: string;
    mechanics: string[];
}
export const sampleRefactoring: RefactoringStep = {
    name: "함수 추출하기",
    motivation: "코드 목적과 구현의 분리",
    mechanics: ["새 함수 생성", "코드 복사", "매개변수 전달", "원래 함수 치환"]
};
console.log("[Refactoring 5.1] 리팩터링 카탈로그 표준 형식:", sampleRefactoring.name);
