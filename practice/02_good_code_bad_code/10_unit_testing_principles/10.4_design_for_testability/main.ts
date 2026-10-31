// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/10.4_design_for_testability/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface Storage { save(k: string, v: string): void; }
export class UserManager {
    constructor(private s: Storage) {}
    register(name: string) { this.s.save("lastUser", name); }
}
console.log("[Good Code 10.4] 테스트 가능 설계 완료");
