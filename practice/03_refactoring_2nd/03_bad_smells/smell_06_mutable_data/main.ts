// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_06_mutable_data/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function addItem<T>(list: readonly T[], item: T): T[] {
    return [...list, item];
}
console.log("[Smell 06] 불변 추가:", addItem([1, 2], 3));
