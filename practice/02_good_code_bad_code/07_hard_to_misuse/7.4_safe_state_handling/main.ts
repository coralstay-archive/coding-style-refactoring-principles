// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.4_safe_state_handling/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export type OrderState = 
    | { status: "DRAFT" }
    | { status: "PAID"; paidAt: Date }
    | { status: "SHIPPED"; trackingNumber: string };

export function shipOrder(order: OrderState, tracking: string): OrderState {
    if (order.status !== "PAID") throw new Error("결제 완료된 주문만 배송할 수 있습니다.");
    return { status: "SHIPPED", trackingNumber: tracking };
}
console.log("[Good Code 7.4] 안전한 상태 전이");
