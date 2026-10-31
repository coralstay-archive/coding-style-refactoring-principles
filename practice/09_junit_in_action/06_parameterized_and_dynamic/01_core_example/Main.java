// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/01_core_example/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static boolean isPalindrome(String s) {
        return new StringBuilder(s).reverse().toString().equalsIgnoreCase(s);
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action Ch 6] 회문 검사: " + isPalindrome("radar"));
    }
}
