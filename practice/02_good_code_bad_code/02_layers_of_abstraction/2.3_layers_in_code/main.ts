// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.3_layers_in_code/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface HttpFetcher { fetch(url: string): string; }
export class ApiClient {
    constructor(private fetcher: HttpFetcher) {}
    getUserName(id: number): string {
        const raw = this.fetcher.fetch(`/users/${id}`);
        return JSON.parse(raw).name;
    }
}
console.log("[Good Code 2.3] API 계층 완성");
