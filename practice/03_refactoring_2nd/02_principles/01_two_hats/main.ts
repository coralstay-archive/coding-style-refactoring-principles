// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/02_principles/01_two_hats/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class TwoHatsPolicy {
    static validateMode(isRefactoring: boolean, addingFeatures: boolean): boolean {
        // 두 작업을 동시에 진행하면 안 됨
        return !(isRefactoring && addingFeatures);
    }
}
console.log("[Refactoring 2.1] 두 모자 분리 여부:", TwoHatsPolicy.validateMode(true, false));
