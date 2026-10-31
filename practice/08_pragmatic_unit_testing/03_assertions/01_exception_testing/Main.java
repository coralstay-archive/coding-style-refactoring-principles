// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/03_assertions/01_exception_testing/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static double divide(double a, double b) {
        if (b == 0.0) throw new IllegalArgumentException("0으로 나눌 수 없습니다.");
        return a / b;
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 3.1] 10 / 2 = " + divide(10, 2));
    }
}
