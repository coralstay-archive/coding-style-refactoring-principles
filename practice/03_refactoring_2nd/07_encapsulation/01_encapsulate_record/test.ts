// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/01_encapsulate_record/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Organization } from "./main";
import assert from "assert";

const org = new Organization({ name: "Acme", country: "US" });
assert.strictEqual(org.name, "Acme");
org.name = "Acme Corp";
assert.strictEqual(org.name, "Acme Corp");
assert.strictEqual(org.country, "US");
console.log("PASS: 7.1 Encapsulate Record");
