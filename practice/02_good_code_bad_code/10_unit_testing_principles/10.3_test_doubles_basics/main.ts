// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/10_unit_testing_principles/10.3_test_doubles_basics/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface WeatherService { getTemp(city: string): number; }
export class WeatherAdvisor {
    constructor(private ws: WeatherService) {}
    isHot(city: string): boolean { return this.ws.getTemp(city) >= 30; }
}
console.log("[Good Code 10.3] 날씨 조언자 초기화");
