// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/02_principles/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 2] 리팩터링 정의와 3의 법칙
export class RefactoringPrinciples {
    static shouldRefactor(duplicationCount: number): boolean {
        // 삼진 규칙 (Rule of Three): 비슷한 작업을 3번째 하게 되면 리팩터링하라
        return duplicationCount >= 3;
    }
}

console.log("[Refactoring Ch 2] 삼진 규칙 판별:", RefactoringPrinciples.shouldRefactor(3));
