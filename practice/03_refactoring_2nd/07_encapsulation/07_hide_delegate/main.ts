// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/07_hide_delegate/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Department { constructor(public manager: string) {} }
export class Person {
    constructor(private dept: Department) {}
    get manager(): string { return this.dept.manager; }
}
const dept = new Department("Kent Beck");
const p = new Person(dept);
console.log("[Fowler 7.7] Manager:", p.manager);
