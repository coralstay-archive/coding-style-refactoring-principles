// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_04_long_parameter_list/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface DateRange { start: Date; end: Date; }
export function isInRange(date: Date, range: DateRange): boolean {
    return date >= range.start && date <= range.end;
}
console.log("[Smell 04] 매개변수 객체화 완료");
