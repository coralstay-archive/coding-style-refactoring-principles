// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/07_refactoring_for_valuable_tests/02_domain_model_purity/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class User {
    private _email: string;
    private _isEmailConfirmed: boolean = false;
    constructor(email: string) { this._email = email; }
    changeEmail(newEmail: string): boolean {
        if (!newEmail.includes("@")) return false;
        this._email = newEmail;
        this._isEmailConfirmed = false;
        return true;
    }
    get email(): string { return this._email; }
    get isEmailConfirmed(): boolean { return this._isEmailConfirmed; }
}
console.log("[Khorikov 7.2] User Model Created");
