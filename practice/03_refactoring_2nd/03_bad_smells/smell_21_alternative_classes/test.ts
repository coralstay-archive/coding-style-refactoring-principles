// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_21_alternative_classes/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { EmailNotifier } from "./main";
import assert from "assert";
assert.strictEqual(new EmailNotifier().send("hi"), true);
console.log("PASS: Smell 21 Test");
