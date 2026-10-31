// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/04_method_source/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Rectangle[] testCases = {
            new Main.Rectangle(3, 4),
            new Main.Rectangle(5, 5),
            new Main.Rectangle(0, 10)
        };
        int[] expectedAreas = {12, 25, 0};

        for (int i = 0; i < testCases.length; i++) {
            if (testCases[i].getArea() != expectedAreas[i]) {
                throw new AssertionError("Method source mismatch at index " + i);
            }
        }
        System.out.println("PASS: 6.4 @MethodSource Complex Object Stream");
    }
}
