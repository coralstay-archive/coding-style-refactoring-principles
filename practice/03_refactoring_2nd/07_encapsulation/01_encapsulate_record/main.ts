// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/01_encapsulate_record/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Organization {
    private _name: string;
    private _country: string;

    constructor(data: { name: string; country: string }) {
        this._name = data.name;
        this._country = data.country;
    }

    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }
    get country(): string { return this._country; }
}

const org = new Organization({ name: "Acme Gooseberries", country: "GB" });
console.log("[Fowler 7.1] Org:", org.name);
