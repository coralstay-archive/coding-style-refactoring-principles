// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/02_value_source/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static boolean isPalindrome(String s) {
        if (s == null) return false;
        String clean = s.replaceAll("[^A-Za-z0-9]", "").toLowerCase();
        return clean.equals(new StringBuilder(clean).reverse().toString());
    }
    public static void main(String[] args) {
        System.out.println("[Tudose 6.2] Palindrome: " + isPalindrome("racecar"));
    }
}
