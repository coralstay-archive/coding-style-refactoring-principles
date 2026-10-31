// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_19_insider_trading/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { SafeModule } from "./main";
import assert from "assert";
assert.strictEqual(new SafeModule(5).getId(), 5);
console.log("PASS: Smell 19 Test");
