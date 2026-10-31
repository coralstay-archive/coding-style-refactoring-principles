// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/04_pillars_of_good_test/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class User {
    private _name: string;
    constructor(name: string) { this._name = name; }
    // 관찰 가능한 상태만 제공
    get name(): string { return this._name; }
    rename(newName: string) { this._name = newName; }
}
console.log("[Unit Testing Ch 4] 리팩터링 내성을 갖춘 User");
