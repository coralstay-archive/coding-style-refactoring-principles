// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct_boundary_conditions/01_core_example/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int getFirstOrZero(int[] arr) {
        // Existence(빈 배열) 및 Cardinality(0) 방어
        if (arr == null || arr.length == 0) return 0;
        return arr[0];
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic JUnit Ch 7] 경계값 검증: " + getFirstOrZero(new int[]{}));
    }
}
