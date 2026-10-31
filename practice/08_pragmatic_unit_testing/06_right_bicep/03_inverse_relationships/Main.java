// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/03_inverse_relationships/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static double squareRoot(double n) {
        if (n < 0) throw new IllegalArgumentException("Negative number");
        return Math.sqrt(n);
    }
    public static void main(String[] args) {
        System.out.println("[Langr 6.3] sqrt(25): " + squareRoot(25.0));
    }
}
