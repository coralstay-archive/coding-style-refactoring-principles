// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/05_immutability_contracts/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface ConfigOption {
    readonly timeoutMs: number;
    readonly retryLimit: number;
}

export class NetworkClient {
    constructor(public readonly config: ConfigOption) {}
    getSummary(): string {
        return `Timeout: ${this.config.timeoutMs}ms, Retries: ${this.config.retryLimit}`;
    }
}

const client = new NetworkClient({ timeoutMs: 3000, retryLimit: 3 });
console.log("[Long 3.5] " + client.getSummary());
