// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/01_parameterized_tests/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static boolean isPalindrome(String str) {
        if (str == null) return false;
        String rev = new StringBuilder(str).reverse().toString();
        return str.equalsIgnoreCase(rev);
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 6.1] 회문 검사: " + isPalindrome("level"));
    }
}
