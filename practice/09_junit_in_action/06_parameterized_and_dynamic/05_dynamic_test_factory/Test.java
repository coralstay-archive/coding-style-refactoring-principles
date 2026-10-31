// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/05_dynamic_test_factory/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        int[] primes = {2, 3, 5, 7, 11, 13, 17, 19, 23};
        // Dynamic Test Factory 에뮬레이션
        for (int p : primes) {
            if (!Main.isPrime(p)) throw new AssertionError("Dynamic test failed for prime: " + p);
        }
        System.out.println("PASS: 6.5 DynamicTest Factory");
    }
}
