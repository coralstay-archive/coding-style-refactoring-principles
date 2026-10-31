// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_21_alternative_classes/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export interface Notifier { send(msg: string): boolean; }
export class EmailNotifier implements Notifier { send(msg: string): boolean { return true; } }
export class SmsNotifier implements Notifier { send(msg: string): boolean { return true; } }
console.log("[Smell 21] 통일된 Notifier 인터페이스");
