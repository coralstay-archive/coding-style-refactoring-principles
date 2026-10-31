// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_08_shotgun_surgery/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { ConsolidatedConfig } from "./main";
import assert from "assert";
assert.strictEqual(ConsolidatedConfig.TIMEOUT_MS, 3000);
console.log("PASS: Smell 08 Test");
