// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/4.4_unrecoverable_errors/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function assertNever(x: never): never {
    throw new Error(`[Inconceivable] 도달할 수 없는 상태에 진입함: ${x}`);
}
console.log("[Good Code 4.4] 컴파일 타임 전수 검사 유틸 준비 완료");
