// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_03_inverse_relationships/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int encode(int n) { return n ^ 0x5A; }
    public static int decode(int n) { return n ^ 0x5A; }
    public static void main(String[] args) {
        int original = 42;
        System.out.println("[Right-BICEP: Inverse] 복원: " + decode(encode(original)));
    }
}
