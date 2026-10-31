// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/3.2_discovering_code_usage/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function computeTaxRate(countryIsoCode: "KR" | "US" | "JP"): number {
    switch (countryIsoCode) {
        case "KR": return 0.10;
        case "US": return 0.08;
        case "JP": return 0.10;
    }
}
console.log("[Good Code 3.2] KR 세율:", computeTaxRate("KR"));
