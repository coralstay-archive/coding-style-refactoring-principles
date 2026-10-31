// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/09_mocking_best_practices/01_mock_unmanaged_only/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export interface MessageGateway { send(msg: string): boolean; }
export class NotificationService {
    constructor(private gateway: MessageGateway) {}
    notifyUser(userId: string, text: string): boolean {
        return this.gateway.send(`[User: ${userId}] ${text}`);
    }
}
const dummyGateway: MessageGateway = { send: () => true };
console.log("[Khorikov 9.1] 비관리 의존성 통신 서비스 초기화");
