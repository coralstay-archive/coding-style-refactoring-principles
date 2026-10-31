// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { UserParser } from "./main";
import assert from "assert";

const user = UserParser.parseJson('{"id": 42, "name": "Bob"}');
assert.strictEqual(user.id, 42);
assert.strictEqual(user.name, "Bob");
console.log("PASS: Ch 02 Test");
