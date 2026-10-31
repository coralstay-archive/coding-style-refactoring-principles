// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_10_data_clumps/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class GeoPoint {
    constructor(public lat: number, public lon: number) {}
}
console.log("[Smell 10] 데이터 뭉치 해소:", new GeoPoint(37.5, 127.0));
