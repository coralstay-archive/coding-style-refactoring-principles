// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/10_test_doubles/01_core_example/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public interface Database { int queryCount(); }
    public static class Service {
        private final Database db;
        public Service(Database db) { this.db = db; }
        public boolean hasData() { return db.queryCount() > 0; }
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic JUnit Ch 10] 테스트 대역 주입 구조");
    }
}
