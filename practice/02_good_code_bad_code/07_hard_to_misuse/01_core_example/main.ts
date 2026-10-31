// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 7] 원시 타입 집착을 피한 이메일 도메인 타입
export class EmailAddress {
    private constructor(private readonly email: string) {}

    static create(raw: string): EmailAddress {
        if (!raw.includes("@") || !raw.includes(".")) {
            throw new Error(`유효하지 않은 이메일 형식입니다: ${raw}`);
        }
        return new EmailAddress(raw.toLowerCase().trim());
    }

    toString(): string {
        return this.email;
    }
}

console.log("[Good Code Ch 7] 이메일 생성:", EmailAddress.create("User@Example.COM").toString());
