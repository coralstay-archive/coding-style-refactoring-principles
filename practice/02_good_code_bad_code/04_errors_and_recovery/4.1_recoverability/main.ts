// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.1_recoverability/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class NetworkError extends Error {}
export class OutOfMemoryFatalError extends Error {}
export function isRecoverable(e: Error): boolean {
    return e instanceof NetworkError;
}
console.log("[Good Code 4.1] 복구 가능 여부:", isRecoverable(new NetworkError("타임아웃")));
