// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.5_caller_recoverable_errors/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface StorageResponse {
    success: boolean;
    retryAfterSeconds?: number;
}
export function writeData(quotaAvailable: boolean): StorageResponse {
    if (!quotaAvailable) return { success: false, retryAfterSeconds: 60 };
    return { success: true };
}
console.log("[Good Code 4.5]", writeData(false));
