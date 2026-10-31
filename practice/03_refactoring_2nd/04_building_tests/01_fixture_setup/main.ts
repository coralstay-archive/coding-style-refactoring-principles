// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/04_building_tests/01_fixture_setup/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class Province {
    name: string;
    producers: { name: string; cost: number; production: number }[];
    totalProduction: number;
    demand: number;
    price: number;
    constructor(doc: any) {
        this.name = doc.name;
        this.producers = doc.producers || [];
        this.totalProduction = this.producers.reduce((acc, p) => acc + p.production, 0);
        this.demand = doc.demand;
        this.price = doc.price;
    }
    get shortfall(): number { return this.demand - this.totalProduction; }
    get profit(): number { return (Math.min(this.demand, this.totalProduction) * this.price); }
}
console.log("[Refactoring 4.1] Province 테스트 픽스처 로드");
