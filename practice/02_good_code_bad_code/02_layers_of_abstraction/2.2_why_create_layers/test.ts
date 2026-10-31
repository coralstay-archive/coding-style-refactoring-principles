// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.2_why_create_layers/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { GameSoundManager, AudioPlayer } from "./main";
import assert from "assert";
const mgr = new GameSoundManager(new AudioPlayer());
assert.ok(mgr.playExplosion().includes("explosion.wav"));
console.log("PASS: 2.2 Test");
