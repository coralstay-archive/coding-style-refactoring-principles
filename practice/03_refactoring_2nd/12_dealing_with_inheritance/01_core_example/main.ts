// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/12_dealing_with_inheritance/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 12] 상속 대신 위임
export interface BookingDelegate {
    hasDinner(): boolean;
}

export class Booking {
    constructor(private readonly delegate?: BookingDelegate) {}

    hasDinner(): boolean {
        return this.delegate ? this.delegate.hasDinner() : false;
    }
}

console.log("[Good Code Ch 12] 위임 기반 예약 시스템");
