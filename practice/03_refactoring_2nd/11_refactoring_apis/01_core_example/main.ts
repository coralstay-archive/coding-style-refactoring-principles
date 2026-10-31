// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 11] CQS: 부수 효과와 조회 분리
export class SecuritySystem {
    private suspiciousAlerts: string[] = [];

    // 질의 함수 (Query - 순수 함수)
    findMiscreant(people: string[]): string | undefined {
        return people.find(p => p === "Don" || p === "John");
    }

    // 변경 함수 (Modifier - 부수 효과)
    sendAlert(person: string): void {
        this.suspiciousAlerts.push(person);
    }
}

console.log("[Good Code Ch 11] CQS 원칙 적용 완료");
