// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/07_cardinality_fenceposts/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.List;

public class Main {
    public static double computeAverage(List<Integer> numbers) {
        if (numbers == null || numbers.isEmpty()) return 0.0;
        int sum = 0;
        for (int n : numbers) sum += n;
        return (double) sum / numbers.size();
    }
    public static void main(String[] args) {
        System.out.println("[Langr 7.6] Ready");
    }
}
