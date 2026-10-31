// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/02_exploring_core_junit/03_nested_tests/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class StackContext {
        public static boolean isStackEmpty(int size) { return size == 0; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 2.3] 중첩 컨텍스트 테스트");
    }
}
