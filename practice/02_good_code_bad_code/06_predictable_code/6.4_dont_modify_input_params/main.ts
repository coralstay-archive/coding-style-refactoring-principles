// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.4_dont_modify_input_params/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function appendTag(tags: readonly string[], newTag: string): string[] {
    return [...tags, newTag]; // 원본 불변 유지
}
console.log("[Good Code 6.4]", appendTag(["ts", "code"], "clean"));
