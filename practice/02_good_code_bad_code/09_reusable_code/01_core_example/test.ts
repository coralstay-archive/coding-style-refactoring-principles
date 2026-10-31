// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/01_core_example/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { ImmutableStack } from "./main";
import assert from "assert";

const s = new ImmutableStack<string>().push("A").push("B");
assert.strictEqual(s.peek(), "B");
assert.strictEqual(s.size(), 2);
console.log("PASS: Ch 09 Test");
