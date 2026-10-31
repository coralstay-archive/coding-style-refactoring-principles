// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.5_avoid_misleading_functions/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function fetchUserOrNull(id: number): { id: number; name: string } | null {
    if (id <= 0) return null;
    return { id, name: `User_${id}` };
}
console.log("[Good Code 6.5]", fetchUserOrNull(1));
