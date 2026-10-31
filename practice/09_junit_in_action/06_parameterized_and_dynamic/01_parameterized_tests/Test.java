// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/01_parameterized_tests/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        String[] words = {"level", "radar", "noon"};
        for (String w : words) {
            if (!Main.isPalindrome(w)) throw new AssertionError();
        }
        System.out.println("PASS: 6.1 Test");
    }
}
