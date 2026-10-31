// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.2_depend_on_interfaces/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { InMemoryCache } from "./main";
import assert from "assert";
const c = new InMemoryCache();
c.set("x", "1");
assert.strictEqual(c.get("x"), "1");
console.log("PASS: 8.2 Test");
