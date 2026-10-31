// ==============================================================================
// @file: test.ts
// @path: tracks/07_unit_testing/05_mocks_and_stubs/01_cqs_mock_vs_stub/test.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

import { UserRegistrationService, UserRepository, EmailService } from "./main";
import assert from "assert";

// 1. Stub: Query에 필요한 데이터만 단순 반환 (호출 여부 단언 금지)
const stubRepo: UserRepository = {
    findById: (id: string) => (id === "U1" ? { name: "Alice", email: "alice@example.com" } : null)
};

// 2. Mock: Command의 부수 효과 발생 여부를 기록하고 검증
class MockEmailService implements EmailService {
    public sentEmails: string[] = [];
    sendWelcomeEmail(email: string): void {
        this.sentEmails.push(email);
    }
}

const mockEmail = new MockEmailService();
const service = new UserRegistrationService(stubRepo, mockEmail);

assert.strictEqual(service.register("U1"), true);
assert.strictEqual(mockEmail.sentEmails.length, 1); // Command Mock 검증
assert.strictEqual(mockEmail.sentEmails[0], "alice@example.com");

assert.strictEqual(service.register("U999"), false);
assert.strictEqual(mockEmail.sentEmails.length, 1); // 추가 호출 없음 검증
console.log("PASS: 5.1 CQS Mock vs Stub");
