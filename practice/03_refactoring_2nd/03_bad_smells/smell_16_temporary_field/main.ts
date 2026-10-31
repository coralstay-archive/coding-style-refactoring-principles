// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_16_temporary_field/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class SearchResults {
    constructor(public readonly hits: string[], public readonly totalCount: number) {}
}
console.log("[Smell 16] 결과 전용 객체:", new SearchResults(["doc1"], 1));
