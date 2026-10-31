// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.4_use_generics_properly/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function firstOrThrow<T>(list: T[]): T {
    if (list.length === 0) throw new Error("리스트가 비어 있습니다.");
    return list[0];
}
console.log("[Good Code 9.4] 제네릭 첫 원소:", firstOrThrow(["Alpha", "Beta"]));
