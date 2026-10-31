// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/05_mocks_and_stubs/01_cqs_mock_vs_stub/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export interface UserRepository {
    findById(id: string): { name: string; email: string } | null;
}

export interface EmailService {
    sendWelcomeEmail(email: string): void;
}

export class UserRegistrationService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly emailService: EmailService
    ) {}

    register(id: string): boolean {
        const user = this.userRepo.findById(id); // Query: Stub 사용
        if (!user) return false;
        this.emailService.sendWelcomeEmail(user.email); // Command: Mock 검증 대상
        return true;
    }
}

console.log("[Khorikov 5.1] CQS Service Ready");
