// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/11_database_layer_testing/01_core_example/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.InMemoryDb db = new Main.InMemoryDb();
        db.insert();
        if (db.count() != 1) throw new AssertionError();
        System.out.println("PASS: JUnit in Action Ch 11");
    }
}
