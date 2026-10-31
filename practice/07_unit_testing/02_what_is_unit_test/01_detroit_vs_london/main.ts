// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/02_what_is_unit_test/01_detroit_vs_london/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class Warehouse {
    private stock = new Map<string, number>();
    add(item: string, qty: number) { this.stock.set(item, (this.stock.get(item) || 0) + qty); }
    has(item: string, qty: number): boolean { return (this.stock.get(item) || 0) >= qty; }
    remove(item: string, qty: number) { this.stock.set(item, (this.stock.get(item) || 0) - qty); }
}
export class OrderService {
    purchase(w: Warehouse, item: string, qty: number): boolean {
        if (!w.has(item, qty)) return false;
        w.remove(item, qty);
        return true;
    }
}
console.log("[Khorikov 2.1] 고전파 도메인 연동");
