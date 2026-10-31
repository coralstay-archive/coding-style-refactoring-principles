// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/03_csv_source/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        int[][] csvData = {
            {2, 3, 6},
            {5, 0, 0},
            {-4, 5, -20},
            {10, 10, 100}
        };
        for (int[] row : csvData) {
            int a = row[0];
            int b = row[1];
            int expected = row[2];
            if (Main.multiply(a, b) != expected) {
                throw new AssertionError("Multiplication failed for: " + a + " * " + b);
            }
        }
        System.out.println("PASS: 6.3 @CsvSource Multi-Argument Test");
    }
}
