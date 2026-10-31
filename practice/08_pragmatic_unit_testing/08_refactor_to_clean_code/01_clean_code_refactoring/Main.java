// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/08_refactor_to_clean_code/01_clean_code_refactoring/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static boolean isValidIdentifier(String s) {
        if (s == null || s.isEmpty()) return false;
        return Character.isLetter(s.charAt(0));
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 8.1] 식별자 검증: " + isValidIdentifier("user1"));
    }
}
