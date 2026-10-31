// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/08_correct_boundary/correct_01_conformance/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

class EmailValidator {
    public static boolean isValid(String email) {
        if (email == null) return false;
        int atIndex = email.indexOf('@');
        int dotIndex = email.lastIndexOf('.');
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length() - 1;
    }

    public static void main(String[] args) {
        System.out.println("[Langr 8.1] Valid: " + isValid("user@example.com"));
    }
}
