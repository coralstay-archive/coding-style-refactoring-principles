// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_05_global_data/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { SafeStore } from "./main";
import assert from "assert";
SafeStore.set("updated");
assert.strictEqual(SafeStore.get(), "updated");
console.log("PASS: Smell 05 Test");
