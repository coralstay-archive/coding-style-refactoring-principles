// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/12_dealing_with_inheritance/01_replace_subclass_with_delegate/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface BookingDelegate {
    hasTalkback(): boolean;
    basePrice(): number;
}
export class PremiumBookingDelegate implements BookingDelegate {
    hasTalkback(): boolean { return true; }
    basePrice(): number { return 150; }
}
export class Booking {
    show: string;
    delegate?: BookingDelegate;
    constructor(show: string, delegate?: BookingDelegate) {
        this.show = show;
        this.delegate = delegate;
    }
    get price(): number {
        return this.delegate ? this.delegate.basePrice() : 100;
    }
    get hasTalkback(): boolean {
        return this.delegate ? this.delegate.hasTalkback() : false;
    }
}
console.log("[Refactoring 12.1] 위임 기반 프리미엄 예약:", new Booking("Hamlet", new PremiumBookingDelegate()).price);
