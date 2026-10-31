// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/01_replace_derived_with_query/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class ProductionPlan {
    private _adjustments: number[] = [];
    get production(): number {
        return this._adjustments.reduce((sum, a) => sum + a, 0);
    }
    applyAdjustment(adj: number) {
        this._adjustments.push(adj);
    }
}
const plan = new ProductionPlan();
plan.applyAdjustment(100);
plan.applyAdjustment(50);
console.log("[Refactoring 9.1] 동적 계산된 총 생산량:", plan.production);
