// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/01_explain_boolean_expression/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function canAccessAdminPanel(user: { role: string; isMfaEnabled: boolean; ipAllowed: boolean }): boolean {
    const isSuperAdmin = user.role === "SUPER_ADMIN";
    const hasValidSecurity = user.isMfaEnabled && user.ipAllowed;
    return isSuperAdmin || hasValidSecurity;
}

console.log("[Good Code 5.1] Access:", canAccessAdminPanel({ role: "ADMIN", isMfaEnabled: true, ipAllowed: true }));
