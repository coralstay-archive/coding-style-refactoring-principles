// ==============================================================================
// @file: test.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.4_safe_state_handling/test.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

import { shipOrder, OrderState } from "./main";
import assert from "assert";
const paid: OrderState = { status: "PAID", paidAt: new Date() };
const shipped = shipOrder(paid, "TRK_123");
assert.strictEqual(shipped.status, "SHIPPED");
assert.throws(() => shipOrder({ status: "DRAFT" }, "TRK"), /결제 완료된 주문만/);
console.log("PASS: 7.4 Test");
