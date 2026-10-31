// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/01_replace_derived_with_query/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { ProductionPlan } from "./main";
import assert from "assert";
const plan = new ProductionPlan();
plan.applyAdjustment(100);
plan.applyAdjustment(50);
assert.strictEqual(plan.production, 150);
console.log("PASS: 9.1 Test");
