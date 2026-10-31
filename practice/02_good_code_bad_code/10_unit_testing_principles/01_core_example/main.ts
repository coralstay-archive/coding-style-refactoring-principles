// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 10] 시스템 시간 의존성을 주입 가능하게 설계
export interface Clock {
    getCurrentTimeMs(): number;
}

export class SessionManager {
    constructor(private readonly clock: Clock, private readonly timeoutMs: number = 30000) {}

    isExpired(loginTimeMs: number): boolean {
        return (this.clock.getCurrentTimeMs() - loginTimeMs) > this.timeoutMs;
    }
}

console.log("[Good Code Ch 10] 세션 관리자 초기화 완료");
