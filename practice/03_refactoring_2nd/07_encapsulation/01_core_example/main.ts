// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 7] 위임 숨기기
export class Department {
    constructor(private readonly manager: string) {}
    getManager(): string { return this.manager; }
}

export class Person {
    constructor(private readonly name: string, private readonly department: Department) {}
    // 위임 숨기기: person.department.getManager() 대신 직접 제공
    getManagerName(): string { return this.department.getManager(); }
}

console.log(new Person("Alice", new Department("Bob")).getManagerName());
