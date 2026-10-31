// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/08_moving_features/08_replace_loop_with_pipeline/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function acquireIndianCompanyNames(data: { name: string; country: string }[]): string[] {
    return data
        .filter(c => c.country === "India")
        .map(c => c.name);
}
console.log("[Fowler 8.8] Indian:", acquireIndianCompanyNames([{ name: "Tata", country: "India" }]));
