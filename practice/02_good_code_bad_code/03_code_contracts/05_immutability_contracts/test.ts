// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/05_immutability_contracts/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { NetworkClient, ConfigOption } from "./main";
import assert from "assert";

const opt: ConfigOption = { timeoutMs: 5000, retryLimit: 5 };
const client = new NetworkClient(opt);
assert.strictEqual(client.config.timeoutMs, 5000);
assert.strictEqual(client.getSummary(), "Timeout: 5000ms, Retries: 5");
console.log("PASS: 3.5 Immutability Contracts");
