// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/20_tdd_with_junit5/01_junit5_tdd_cycle/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class StringCalculator {
        public static int add(String numbers) {
            if (numbers == null || numbers.isEmpty()) return 0;
            return Integer.parseInt(numbers);
        }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 20.1] TDD 계산기: " + StringCalculator.add("7"));
    }
}
