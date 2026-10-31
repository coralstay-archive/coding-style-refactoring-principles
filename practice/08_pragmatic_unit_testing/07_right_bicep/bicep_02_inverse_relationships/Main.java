// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_right_bicep/bicep_02_inverse_relationships/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

class SimpleCipher {
    public static String encode(String text, int shift) {
        StringBuilder sb = new StringBuilder();
        for (char c : text.toCharArray()) {
            sb.append((char) (c + shift));
        }
        return sb.toString();
    }

    public static String decode(String cipher, int shift) {
        StringBuilder sb = new StringBuilder();
        for (char c : cipher.toCharArray()) {
            sb.append((char) (c - shift));
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println("[Langr 7.2] Cipher ready");
    }
}
