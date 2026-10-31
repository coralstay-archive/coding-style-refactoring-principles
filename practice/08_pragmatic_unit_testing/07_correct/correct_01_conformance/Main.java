// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_01_conformance/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static boolean isPostalCode(String s) {
        return s != null && s.matches("\\d{5}");
    }
    public static void main(String[] args) {
        System.out.println("[CORRECT: Conformance] 규격: " + isPostalCode("12345"));
    }
}
