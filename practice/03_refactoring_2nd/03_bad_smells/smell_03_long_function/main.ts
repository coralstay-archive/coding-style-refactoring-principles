// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_03_long_function/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function parseTokens(input: string): string[] { return input.split(","); }
export function sumTokens(tokens: string[]): number { return tokens.map(Number).reduce((a, b) => a + b, 0); }
export function processInput(input: string): number { return sumTokens(parseTokens(input)); }
console.log("[Smell 03] 분리된 함수 결과:", processInput("10,20,30"));
