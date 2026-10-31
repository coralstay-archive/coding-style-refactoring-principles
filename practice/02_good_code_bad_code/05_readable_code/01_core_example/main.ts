// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 5] 서술적 가드 절
export function calculateDeliveryFee(distanceKm: number, isVip: boolean): number {
    if (isVip) return 0;
    if (distanceKm <= 5) return 2500;
    return 2500 + (distanceKm - 5) * 500;
}

console.log("[Good Code Ch 5] 배송비:", calculateDeliveryFee(8, false));
