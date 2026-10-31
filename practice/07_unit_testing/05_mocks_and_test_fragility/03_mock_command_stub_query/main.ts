// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/05_mocks_and_test_fragility/03_mock_command_stub_query/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export interface EmailService { send(to: string, body: string): void; }
export interface UserDatabase { getUserEmail(userId: string): string; }

export class NotificationManager {
    constructor(private db: UserDatabase, private emailSvc: EmailService) {}
    notify(userId: string, message: string): void {
        const email = this.db.getUserEmail(userId); // Query: Stub
        this.emailSvc.send(email, message);        // Command: Mock
    }
}
console.log("[Khorikov 5.3] Ready");
