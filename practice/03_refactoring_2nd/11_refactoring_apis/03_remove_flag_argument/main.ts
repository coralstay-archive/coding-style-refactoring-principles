// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/03_remove_flag_argument/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class DeliveryService {
    static bookRegularDelivery(): string { return "Standard Delivery (3 Days)"; }
    static bookRushDelivery(): string { return "Rush Delivery (Next Day)"; }
}
console.log("[Fowler 11.3] " + DeliveryService.bookRushDelivery());
