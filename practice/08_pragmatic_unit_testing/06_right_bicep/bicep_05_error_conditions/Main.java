// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_05_error_conditions/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static boolean parseToken(String token) {
        if (token == null || !token.startsWith("TOKEN_")) throw new RuntimeException("Bad Token");
        return true;
    }
    public static void main(String[] args) {
        System.out.println("[Right-BICEP: Error] 토큰 검증 완료");
    }
}
