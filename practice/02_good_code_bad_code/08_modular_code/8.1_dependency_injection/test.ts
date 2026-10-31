// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/8.1_dependency_injection/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { GreetingService } from "./main";
import assert from "assert";
const svc = new GreetingService({ now: () => new Date("2026-01-01T15:00:00Z") });
assert.ok(svc.getHour() >= 0);
console.log("PASS: 8.1 Test");
