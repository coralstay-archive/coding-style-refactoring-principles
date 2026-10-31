// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_09_feature_envy/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Address {
    constructor(public city: string, public zip: string) {}
    format(): string { return `${this.city} (${this.zip})`; }
}
console.log("[Smell 09]", new Address("Seoul", "12345").format());
