// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.2_depend_on_interfaces/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface Cache { get(k: string): string | null; set(k: string, v: string): void; }
export class InMemoryCache implements Cache {
    private m = new Map<string, string>();
    get(k: string) { return this.m.get(k) || null; }
    set(k: string, v: string) { this.m.set(k, v); }
}
console.log("[Good Code 8.2] 인터페이스 의존 캐시");
