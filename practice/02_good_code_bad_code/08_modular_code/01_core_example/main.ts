// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/08_modular_code/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 8] 인터페이스 기반 메시지 발송 모듈
export interface MessageSender {
    sendMessage(to: string, body: string): boolean;
}

export class NotificationService {
    constructor(private readonly sender: MessageSender) {}

    notifyUser(userId: string, alert: string): boolean {
        return this.sender.sendMessage(userId, `[ALERT] ${alert}`);
    }
}

class ConsoleSender implements MessageSender {
    sendMessage(to: string, body: string): boolean {
        console.log(`[Send to ${to}]: ${body}`);
        return true;
    }
}

const service = new NotificationService(new ConsoleSender());
service.notifyUser("user_10", "서버 과부하 경고");
