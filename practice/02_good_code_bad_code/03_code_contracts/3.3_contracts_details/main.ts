// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.3_contracts_details/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class SafeId {
    private constructor(public readonly value: string) {}
    static from(raw: string): SafeId {
        if (!raw || raw.length < 5) throw new Error("ID는 5글자 이상이어야 합니다.");
        return new SafeId(raw);
    }
}
console.log("[Good Code 3.3] 유효 ID:", SafeId.from("USER_01").value);
