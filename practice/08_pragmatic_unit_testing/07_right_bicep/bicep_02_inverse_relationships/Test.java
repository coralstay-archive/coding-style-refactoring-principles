// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_right_bicep/bicep_02_inverse_relationships/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        String original = "CleanCode2026";
        int shift = 3;

        String encoded = SimpleCipher.encode(original, shift);
        String decoded = SimpleCipher.decode(encoded, shift);

        // Inverse relationship invariant: decode(encode(x)) == x
        assert decoded.equals(original) : "역연산 결과는 항상 원본과 동일해야 함";
        System.out.println("PASS: 7.2 Inverse Relationships");
    }
}
