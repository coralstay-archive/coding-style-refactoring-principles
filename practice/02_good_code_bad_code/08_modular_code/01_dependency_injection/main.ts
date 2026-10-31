// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/01_dependency_injection/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export interface Notifier {
    send(message: string): boolean;
}

export class OrderProcessor {
    constructor(private readonly notifier: Notifier) {}

    checkout(orderId: string, amount: number): boolean {
        if (amount <= 0) return false;
        return this.notifier.send(`Order ${orderId} confirmed: $${amount}`);
    }
}

class ConsoleNotifier implements Notifier {
    send(msg: string): boolean {
        console.log("[Notice]", msg);
        return true;
    }
}

const processor = new OrderProcessor(new ConsoleNotifier());
processor.checkout("ORD-001", 150);
