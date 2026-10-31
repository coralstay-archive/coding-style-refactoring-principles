// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/03_parameterized_tests/01_csv_source_parameterized/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        // CsvSource 데이터 주도 매개변수화 검증 모의
        String[][] testCases = {
            {"I", "1"},
            {"V", "5"},
            {"X", "10"},
            {"UNKNOWN", "0"}
        };

        for (String[] tc : testCases) {
            String input = tc[0];
            int expected = Integer.parseInt(tc[1]);
            assert RomanNumeralConverter.convert(input) == expected;
        }

        System.out.println("PASS: 3.1 Parameterized CsvSource");
    }
}
