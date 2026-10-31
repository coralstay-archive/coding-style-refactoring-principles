// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_19_insider_trading/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface PublicContract { getId(): number; }
export class SafeModule implements PublicContract {
    constructor(private id: number) {}
    getId(): number { return this.id; }
}
console.log("[Smell 19] 공개 인터페이스만 노출:", new SafeModule(1).getId());
