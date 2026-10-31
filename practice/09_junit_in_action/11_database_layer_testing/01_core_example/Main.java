// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/11_database_layer_testing/01_core_example/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class InMemoryDb {
        private int count = 0;
        public void insert() { count++; }
        public int count() { return count; }
    }
    public static void main(String[] args) {
        InMemoryDb db = new InMemoryDb();
        db.insert();
        System.out.println("[JUnit in Action Ch 11] DB 카운트: " + db.count());
    }
}
