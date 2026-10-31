// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.3_careful_defaults/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface ConnectionParams { host: string; port: number; }
export function validateConnection(p: ConnectionParams): boolean {
    return p.host.length > 0 && p.port > 0;
}
console.log("[Good Code 9.3] 연결 검증 완료");
