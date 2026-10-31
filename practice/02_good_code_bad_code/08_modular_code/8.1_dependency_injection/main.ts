// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.1_dependency_injection/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface Clock { now(): Date; }
export class GreetingService {
    constructor(private clock: Clock) {}
    getHour(): number { return this.clock.now().getHours(); }
}
console.log("[Good Code 8.1] DI 서비스 구성");
