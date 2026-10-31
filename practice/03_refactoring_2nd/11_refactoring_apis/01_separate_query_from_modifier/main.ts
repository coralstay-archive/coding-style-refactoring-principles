// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/11_refactoring_apis/01_separate_query_from_modifier/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export class AlertSystem {
    private alerts: string[] = [];
    findMiscreant(people: string[]): string {
        for (const p of people) {
            if (p === "Don" || p === "John") return p;
        }
        return "";
    }
    sendAlert(miscreant: string) {
        if (miscreant !== "") this.alerts.push("경고: " + miscreant + " 침입");
    }
    getAlerts(): string[] { return this.alerts; }
}
const sys = new AlertSystem();
const mis = sys.findMiscreant(["Alice", "Don"]);
sys.sendAlert(mis);
console.log("[Refactoring 11.1] CQS 분리 경고 발령:", sys.getAlerts());
