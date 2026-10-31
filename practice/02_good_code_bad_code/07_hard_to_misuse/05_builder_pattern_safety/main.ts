// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/05_builder_pattern_safety/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class HttpRequest {
    constructor(
        public readonly url: string,
        public readonly method: string,
        public readonly headers: Record<string, string>,
        public readonly body?: string
    ) {}
}

export class HttpRequestBuilder {
    private url!: string;
    private method: string = "GET";
    private headers: Record<string, string> = {};
    private body?: string;

    setUrl(url: string): this { this.url = url; return this; }
    setMethod(m: string): this { this.method = m; return this; }
    addHeader(k: string, v: string): this { this.headers[k] = v; return this; }
    setBody(b: string): this { this.body = b; return this; }

    build(): HttpRequest {
        if (!this.url) throw new Error("URL은 필수입니다.");
        return new HttpRequest(this.url, this.method, this.headers, this.body);
    }
}
console.log("[Long 7.5] Builder pattern ready");
