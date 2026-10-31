// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_06_performance_characteristics/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        Main.fastComputation();
        long elapsed = System.currentTimeMillis() - start;
        if (elapsed > 100) throw new AssertionError();
        System.out.println("PASS: Performance Test");
    }
}
