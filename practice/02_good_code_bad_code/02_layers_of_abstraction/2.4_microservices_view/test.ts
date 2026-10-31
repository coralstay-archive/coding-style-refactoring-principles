// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.4_microservices_view/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { OrderCheckout } from "./main";
import assert from "assert";
const co = new OrderCheckout({ charge: (amt) => amt > 0 });
assert.strictEqual(co.checkout(500), true);
console.log("PASS: 2.4 Test");
