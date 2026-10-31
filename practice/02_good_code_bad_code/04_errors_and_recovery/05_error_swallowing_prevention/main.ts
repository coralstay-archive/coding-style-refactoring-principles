// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/04_errors_and_recovery/05_error_swallowing_prevention/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class SafeParser {
    static parseJsonWithContext(rawJson: string): any {
        try {
            return JSON.parse(rawJson);
        } catch (err: any) {
            // 에러를 삼키지 않고 맥락 정보를 덧붙여 새로운 도메인 에러로 재발생
            throw new Error(`JSON 파싱 실패 (입력값: '${rawJson}'): ${err.message}`);
        }
    }
}
console.log("[Long 4.5] Parser initialized");
