// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/05_mocks_and_test_fragility/01_mock_vs_stub/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export interface DatabaseStub { getPrice(id: string): number; }
export interface EmailSenderMock { send(to: string): void; }
export class CheckoutService {
    constructor(private db: DatabaseStub, private mailer: EmailSenderMock) {}
    buy(id: string, user: string): boolean {
        const price = this.db.getPrice(id); // Stub: 입력 제공
        if (price > 0) {
            this.mailer.send(user); // Mock: 외부 시스템 호출 부수효과
            return true;
        }
        return false;
    }
}
console.log("[Khorikov 5.1] Mock vs Stub 설계 완료");
