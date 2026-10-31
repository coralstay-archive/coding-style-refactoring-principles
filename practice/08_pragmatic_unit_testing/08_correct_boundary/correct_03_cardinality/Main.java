// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/08_correct_boundary/correct_03_cardinality/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.List;

class AverageCalculator {
    public static double average(List<Integer> numbers) {
        if (numbers == null || numbers.isEmpty()) return 0.0; // 0개 (Zero)
        double sum = 0;
        for (int n : numbers) sum += n;
        return sum / numbers.size(); // 1개 및 N개 (One & Many)
    }

    public static void main(String[] args) {
        System.out.println("[Langr 8.3] Avg: " + average(List.of(10, 20)));
    }
}
