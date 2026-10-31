// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/01_separate_query_from_modifier/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { AlertSystem } from "./main";
import assert from "assert";
const sys = new AlertSystem();
const mis = sys.findMiscreant(["Alice", "Bob", "John"]);
assert.strictEqual(mis, "John");
sys.sendAlert(mis);
assert.strictEqual(sys.getAlerts().length, 1);
assert.strictEqual(sys.getAlerts()[0], "경고: John 침입");
console.log("PASS: 11.1 Test");
