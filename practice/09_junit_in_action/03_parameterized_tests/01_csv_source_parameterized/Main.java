// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/03_parameterized_tests/01_csv_source_parameterized/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

class RomanNumeralConverter {
    public static int convert(String roman) {
        if ("I".equals(roman)) return 1;
        if ("V".equals(roman)) return 5;
        if ("X".equals(roman)) return 10;
        return 0;
    }

    public static void main(String[] args) {
        System.out.println("[Tudose 3.1] V = " + convert("V"));
    }
}
