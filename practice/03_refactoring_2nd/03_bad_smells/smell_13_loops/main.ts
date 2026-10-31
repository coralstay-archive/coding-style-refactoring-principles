// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_13_loops/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function getActiveUserNames(users: { name: string; active: boolean }[]): string[] {
    return users.filter(u => u.active).map(u => u.name);
}
console.log("[Smell 13]", getActiveUserNames([{ name: "A", active: true }, { name: "B", active: false }]));
