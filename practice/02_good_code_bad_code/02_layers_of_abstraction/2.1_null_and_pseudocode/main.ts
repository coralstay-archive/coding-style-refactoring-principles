// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.1_null_and_pseudocode/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function safeFind<T>(arr: T[], predicate: (item: T) => boolean): T | null {
    for (const item of arr) {
        if (predicate(item)) return item;
    }
    return null;
}
console.log("[Good Code 2.1]", safeFind([10, 20, 30], x => x > 25));
