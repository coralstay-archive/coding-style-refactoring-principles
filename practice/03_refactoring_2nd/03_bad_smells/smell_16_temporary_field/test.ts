// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_16_temporary_field/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { SearchResults } from "./main";
import assert from "assert";
assert.strictEqual(new SearchResults(["a"], 1).totalCount, 1);
console.log("PASS: Smell 16 Test");
