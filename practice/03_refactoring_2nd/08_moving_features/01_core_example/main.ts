// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/01_core_example/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

// [Refactoring 2nd Ch 8] 반복문을 파이프라인으로 교체
export function acquireTotalActiveRevenue(orders: { amount: number; isActive: boolean }[]): number {
    return orders
        .filter(o => o.isActive)
        .map(o => o.amount)
        .reduce((sum, amt) => sum + amt, 0);
}

console.log(acquireTotalActiveRevenue([{ amount: 100, isActive: true }, { amount: 50, isActive: false }]));
