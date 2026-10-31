// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.3_use_specific_types/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class UserId {
    constructor(public readonly id: string) {
        if (!id.startsWith("USR_")) throw new Error("유효하지 않은 사용자 ID 접두어입니다.");
    }
}
console.log("[Good Code 7.3] 유효 사용자 ID:", new UserId("USR_42"));
