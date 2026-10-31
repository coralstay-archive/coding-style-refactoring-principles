// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/04_test_philosophy/01_testing_pyramid/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.isPyramidHealthy(100, 30, 5)) throw new AssertionError();
        System.out.println("PASS: 4.1 Test");
    }
}
