// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/05_extract_class/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class TelephoneNumber {
    constructor(public areaCode: string, public number: string) {}
    toString(): string { return `(${this.areaCode}) ${this.number}`; }
}

export class Person {
    public telephone: TelephoneNumber;
    constructor(public name: string, areaCode: string, number: string) {
        this.telephone = new TelephoneNumber(areaCode, number);
    }
}
const p = new Person("Martin", "02", "1234-5678");
console.log("[Fowler 7.5] Phone:", p.telephone.toString());
