// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/02_replace_primitive_with_object/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Priority {
    private static readonly LEGAL_VALUES = ["low", "normal", "high", "rush"];

    constructor(private readonly _value: string) {
        if (!Priority.LEGAL_VALUES.includes(_value)) {
            throw new Error(`유효하지 않은 우선순위: ${_value}`);
        }
    }

    toString(): string { return this._value; }
    higherThan(other: Priority): boolean {
        return Priority.LEGAL_VALUES.indexOf(this._value) > Priority.LEGAL_VALUES.indexOf(other._value);
    }
}

export class Order {
    constructor(public priority: Priority) {}
}

const order = new Order(new Priority("rush"));
console.log("[Fowler 7.2] Priority:", order.priority.toString());
