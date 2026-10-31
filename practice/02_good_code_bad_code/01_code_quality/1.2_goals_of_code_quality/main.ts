// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.2_goals_of_code_quality/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class QualityGoals {
    static evaluate(works: boolean, durable: boolean, adaptable: boolean, noDuplication: boolean): boolean {
        return works && durable && adaptable && noDuplication;
    }
}
console.log("[Good Code 1.2] 목표 평가:", QualityGoals.evaluate(true, true, true, true));
