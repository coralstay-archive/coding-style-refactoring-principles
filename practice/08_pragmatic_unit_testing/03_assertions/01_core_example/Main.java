// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/03_assertions/01_core_example/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static double divide(double a, double b) {
        if (b == 0.0) throw new IllegalArgumentException("0 나눗셈 불가");
        return a / b;
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic JUnit Ch 3] 10.0 / 2.0 = " + divide(10.0, 2.0));
    }
}
