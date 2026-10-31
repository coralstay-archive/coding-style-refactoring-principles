// ==============================================================================
// @file: main.ts
// @path: tracks/07_unit_testing/10_database_testing/01_transaction_isolation/main.ts
// @book: 《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)
// ==============================================================================

export class InMemoryDb {
    private tables = new Map<string, any[]>();
    insert(table: string, record: any) {
        const rows = this.tables.get(table) || [];
        rows.push(record);
        this.tables.set(table, rows);
    }
    count(table: string): number { return (this.tables.get(table) || []).length; }
    cleanup() { this.tables.clear(); }
}
const db = new InMemoryDb();
db.insert("users", { id: 1, name: "Alice" });
console.log("[Khorikov 10.1] DB 격리 레코드 수:", db.count("users"));
