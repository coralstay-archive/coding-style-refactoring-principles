// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/11_test_maintenance/01_maintainable_tests/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int sum(int... nums) {
        int s = 0;
        for (int n : nums) s += n;
        return s;
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 11.1] sum: " + sum(1, 2, 3));
    }
}
