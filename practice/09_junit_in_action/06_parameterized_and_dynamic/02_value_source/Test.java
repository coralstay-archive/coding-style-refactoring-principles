// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/02_value_source/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        String[] palindromes = {"radar", "level", "rotor", "kayak", "madam"};
        for (String word : palindromes) {
            if (!Main.isPalindrome(word)) {
                throw new AssertionError("Failed for palindrome: " + word);
            }
        }
        System.out.println("PASS: 6.2 @ValueSource Parameterized Test");
    }
}
