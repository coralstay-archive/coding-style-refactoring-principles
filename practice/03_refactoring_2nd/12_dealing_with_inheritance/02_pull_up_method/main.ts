// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/12_dealing_with_inheritance/02_pull_up_method/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export abstract class Employee {
    constructor(public name: string) {}
    getIdBadge(): string { return "ID-" + this.name.toUpperCase(); }
}

export class Engineer extends Employee {}
export class Manager extends Employee {}

console.log("[Fowler 12.1] Badge:", new Engineer("Kent").getIdBadge());
