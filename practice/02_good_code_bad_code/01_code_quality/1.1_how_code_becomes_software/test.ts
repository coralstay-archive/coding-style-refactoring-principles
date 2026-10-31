// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.1_how_code_becomes_software/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { SoftwarePipeline } from "./main";
import assert from "assert";
const res = SoftwarePipeline.buildArtifact("console.log('hello');");
assert.strictEqual(res.compiled, true);
assert.ok(res.artifactSize > 0);
console.log("PASS: 1.1 Test");
