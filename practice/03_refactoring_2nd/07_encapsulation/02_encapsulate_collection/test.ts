// ==============================================================================
// @file: test.ts
// @path: tracks/03_refactoring_2nd/07_encapsulation/02_encapsulate_collection/test.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

import { Person, Course } from "./main";
import assert from "assert";
const p = new Person();
p.addCourse(new Course("Refactoring"));
const list = p.courses;
list.push(new Course("Hacked"));
assert.strictEqual(p.courses.length, 1);
console.log("PASS: 7.2 Encapsulate Collection");
