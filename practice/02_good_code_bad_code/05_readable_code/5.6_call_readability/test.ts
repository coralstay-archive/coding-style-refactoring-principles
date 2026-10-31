// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.6_call_readability/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { searchWord } from "./main";
import assert from "assert";
assert.strictEqual(searchWord("Apple", "apple", { caseSensitive: false, matchWholeWord: false }), true);
assert.strictEqual(searchWord("Apple", "apple", { caseSensitive: true, matchWholeWord: false }), false);
console.log("PASS: 5.6 Test");
