// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.3_composition_over_inheritance/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { Airplane, Engine } from "./main";
import assert from "assert";
assert.ok(new Airplane(new Engine()).takeOff().includes("Fly"));
console.log("PASS: 8.3 Test");
