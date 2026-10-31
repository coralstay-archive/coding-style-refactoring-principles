// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.1_code_of_others/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class LegacyDoc {
    static getExplanation(author: string, monthsPassed: number): string {
        if (monthsPassed > 6) return `개발자 ${author}도 6개월 후에는 코드를 기억하지 못하므로 명시적 계약이 필수적입니다.`;
        return "최근 작성된 코드";
    }
}
console.log("[Good Code 3.1]", LegacyDoc.getExplanation("Tom", 8));
