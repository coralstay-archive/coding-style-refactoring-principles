// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.2_avoid_global_state/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class ConfigContext {
    constructor(public readonly env: string) {}
}
export function getDbUrl(cfg: ConfigContext): string {
    return `db://${cfg.env}.internal`;
}
console.log("[Good Code 9.2]", getDbUrl(new ConfigContext("prod")));
