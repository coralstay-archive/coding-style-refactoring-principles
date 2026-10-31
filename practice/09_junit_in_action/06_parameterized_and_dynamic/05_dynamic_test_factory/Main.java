// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/05_dynamic_test_factory/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

import java.util.stream.Stream;

public class Main {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println("[Tudose 6.5] isPrime(7): " + isPrime(7));
    }
}
