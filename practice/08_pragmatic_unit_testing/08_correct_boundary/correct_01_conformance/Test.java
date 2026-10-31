// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/08_correct_boundary/correct_01_conformance/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        assert EmailValidator.isValid("user@test.org");
        // 포맷 불일치 경계값들
        assert !EmailValidator.isValid(null);
        assert !EmailValidator.isValid("");
        assert !EmailValidator.isValid("plainaddress");
        assert !EmailValidator.isValid("@missingusername.com");
        assert !EmailValidator.isValid("username@.com");
        System.out.println("PASS: 8.1 CORRECT Conformance");
    }
}
