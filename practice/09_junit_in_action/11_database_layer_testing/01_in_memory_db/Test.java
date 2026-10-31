// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/11_database_layer_testing/01_in_memory_db/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.DatabaseStub db = new Main.DatabaseStub();
        db.insert(42, "Item");
        if (!db.find(42).equals("Item")) throw new AssertionError();
        System.out.println("PASS: 11.1 Test");
    }
}
