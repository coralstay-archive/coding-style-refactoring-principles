// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_08_shotgun_surgery/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class ConsolidatedConfig {
    static readonly TIMEOUT_MS = 3000;
    static readonly MAX_RETRIES = 5;
}
console.log("[Smell 08] 설정 단일화:", ConsolidatedConfig.TIMEOUT_MS);
