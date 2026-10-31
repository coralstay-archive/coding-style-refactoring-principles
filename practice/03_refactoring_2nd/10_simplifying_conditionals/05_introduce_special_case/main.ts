// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/10_simplifying_conditionals/05_introduce_special_case/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface Customer { name: string; isUnknown: boolean; billingPlan: string; }
export class RealCustomer implements Customer {
    isUnknown = false;
    constructor(public name: string, public billingPlan: string) {}
}
export class UnknownCustomer implements Customer {
    isUnknown = true;
    name = "거주자 (Unknown)";
    billingPlan = "기본 플랜";
}
export function getCustomer(exists: boolean): Customer {
    return exists ? new RealCustomer("홍길동", "프리미엄") : new UnknownCustomer();
}
console.log("[Fowler 10.5] Plan:", getCustomer(false).billingPlan);
