// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.3_layers_in_code/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { ApiClient } from "./main";
import assert from "assert";
const client = new ApiClient({ fetch: () => '{"name": "Alice"}' });
assert.strictEqual(client.getUserName(1), "Alice");
console.log("PASS: 2.3 Test");
