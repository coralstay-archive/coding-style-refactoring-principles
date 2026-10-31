// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/06_unit_testing_styles/03_state_based_testing/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class OrderBucket {
    private _items: string[] = [];
    add(item: string): void { this._items.push(item); }
    get count(): number { return this._items.length; }
    get items(): readonly string[] { return [...this._items]; }
}
const b = new OrderBucket();
b.add("Book");
console.log("[Khorikov 6.3] Count:", b.count);
