// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 6] 순수 함수: 원본 배열을 변소시키지 않음
export function sortAscending(numbers: readonly number[]): number[] {
    return [...numbers].sort((a, b) => a - b);
}

const original = [5, 2, 8, 1];
const sorted = sortAscending(original);
console.log("[Good Code Ch 6] 원본 불변 유지:", original, "정렬본:", sorted);
