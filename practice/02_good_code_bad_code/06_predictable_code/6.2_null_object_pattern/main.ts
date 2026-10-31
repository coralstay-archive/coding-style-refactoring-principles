// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/06_predictable_code/6.2_null_object_pattern/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface Logger { log(msg: string): void; }
export class NullLogger implements Logger {
    log(msg: string): void { /* no-op */ }
}
export class ConsoleLogger implements Logger {
    log(msg: string): void { console.log("[LOG]", msg); }
}
console.log("[Good Code 6.2] NullLogger 초기화 성공");
