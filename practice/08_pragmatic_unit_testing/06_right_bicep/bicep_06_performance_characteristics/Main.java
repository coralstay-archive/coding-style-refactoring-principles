// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_06_performance_characteristics/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static long fastComputation() {
        long sum = 0;
        for (int i = 0; i < 1000; i++) sum += i;
        return sum;
    }
    public static void main(String[] args) {
        System.out.println("[Right-BICEP: Performance] 수행 완료: " + fastComputation());
    }
}
