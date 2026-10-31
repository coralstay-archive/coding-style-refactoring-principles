// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.4_microservices_view/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface PaymentGateway {
    charge(amount: number): boolean;
}
export class OrderCheckout {
    constructor(private gateway: PaymentGateway) {}
    checkout(total: number): boolean { return this.gateway.charge(total); }
}
console.log("[Good Code 2.4] 마이크로서비스 게이트웨이");
