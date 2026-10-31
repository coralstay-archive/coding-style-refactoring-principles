// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/02_encapsulate_collection/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Course { constructor(public name: string) {} }
export class Person {
    private _courses: Course[] = [];
    get courses(): Course[] { return [...this._courses]; }
    addCourse(c: Course): void { this._courses.push(c); }
    removeCourse(name: string): void { this._courses = this._courses.filter(c => c.name !== name); }
}
const p = new Person();
p.addCourse(new Course("TDD"));
console.log("[Fowler 7.2] Courses:", p.courses.length);
