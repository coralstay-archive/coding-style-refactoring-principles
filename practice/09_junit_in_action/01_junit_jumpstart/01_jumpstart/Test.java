// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/01_junit_jumpstart/01_jumpstart/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.add(10, 20) != 30) throw new AssertionError();
        System.out.println("PASS: 1.1 Test");
    }
}
