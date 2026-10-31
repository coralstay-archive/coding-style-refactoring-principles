// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/01_junit_jumpstart/01_core_example/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class Calculator {
        public int add(int x, int y) { return x + y; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action Ch 1] 계산기 시작: " + new Calculator().add(1, 1));
    }
}
