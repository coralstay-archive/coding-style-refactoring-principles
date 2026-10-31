// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/17_testing_spring_boot/01_spring_boot_test/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!new Main.AppConfig().isAutoConfigured()) throw new AssertionError();
        System.out.println("PASS: 17.1 Test");
    }
}
