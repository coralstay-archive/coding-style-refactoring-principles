// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.3_error_delivery_methods/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export type Result<T, E> = { ok: true; val: T } | { ok: false; err: E };
export function findItem(id: number): Result<string, string> {
    if (id === 1) return { ok: true, val: "MacBook" };
    return { ok: false, err: `Item not found: ${id}` };
}
console.log("[Good Code 4.3]", findItem(1));
