// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/02_what_is_unit_test/01_core_example/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

// 고전파 스타일: 실제 협력 객체를 사용하여 상태 검증
export class Order {
    constructor(public readonly product: string, public readonly quantity: number) {}
}

export class Warehouse {
    private inventory = new Map<string, number>();
    add(product: string, qty: number) { this.inventory.set(product, (this.inventory.get(product) || 0) + qty); }
    has(product: string, qty: number): boolean { return (this.inventory.get(product) || 0) >= qty; }
}

console.log("[Unit Testing Ch 2] 고전파 도메인 모델");
