// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 2] 파싱 계층과 비즈니스 계층 분리
export interface UserRecord {
    id: number;
    name: string;
}

export class UserParser {
    static parseJson(raw: string): UserRecord {
        const parsed = JSON.parse(raw);
        if (!parsed.id || !parsed.name) {
            throw new Error("Invalid User Record");
        }
        return { id: Number(parsed.id), name: String(parsed.name) };
    }
}

console.log("[Good Code Ch 2] 파싱 완료:", UserParser.parseJson('{"id": 1, "name": "Alice"}'));
