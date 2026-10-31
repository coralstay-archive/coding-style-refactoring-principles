// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.6_call_readability/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface SearchOptions { caseSensitive: boolean; matchWholeWord: boolean; }
export function searchWord(text: string, query: string, opts: SearchOptions): boolean {
    const src = opts.caseSensitive ? text : text.toLowerCase();
    const target = opts.caseSensitive ? query : query.toLowerCase();
    return src.includes(target);
}
console.log("[Good Code 5.6] 명명된 검색 옵션:", searchWord("Hello World", "hello", { caseSensitive: false, matchWholeWord: false }));
