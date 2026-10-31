// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/03_inverse_relationships/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        double original = 49.0;
        double root = Main.squareRoot(original);
        double reconstructed = root * root; // 역관계(Inverse): (sqrt(x))^2 == x
        if (Math.abs(original - reconstructed) > 0.0001) {
            throw new AssertionError("Inverse relationship violated");
        }
        System.out.println("PASS: 6.3 Inverse Relationships");
    }
}
