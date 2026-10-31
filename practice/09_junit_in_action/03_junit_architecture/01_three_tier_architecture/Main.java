// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/03_junit_architecture/01_three_tier_architecture/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static String getEngineName(boolean isJunit5) {
        return isJunit5 ? "junit-jupiter-engine" : "junit-vintage-engine";
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 3.1] 주피터 엔진: " + getEngineName(true));
    }
}
