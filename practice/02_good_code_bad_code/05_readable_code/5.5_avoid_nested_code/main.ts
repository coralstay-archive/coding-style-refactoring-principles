// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.5_avoid_nested_code/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function validateUser(user: { active: boolean; age: number } | null): boolean {
    if (!user) return false;
    if (!user.active) return false;
    if (user.age < 18) return false;
    return true;
}
console.log("[Good Code 5.5] 사용자 자격:", validateUser({ active: true, age: 25 }));
