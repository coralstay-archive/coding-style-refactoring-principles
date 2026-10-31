// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/04_test_philosophy/01_testing_pyramid/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static boolean isPyramidHealthy(int unitTests, int integrationTests, int uiTests) {
        return (unitTests > integrationTests) && (integrationTests > uiTests);
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 4.1] 건강한 피라미드 여부: " + isPyramidHealthy(100, 20, 5));
    }
}
