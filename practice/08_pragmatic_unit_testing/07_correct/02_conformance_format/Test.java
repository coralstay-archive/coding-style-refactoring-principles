// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/02_conformance_format/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.isValidEmail("martin.fowler@thoughtworks.com")) throw new AssertionError();
        if (Main.isValidEmail("plainaddress")) throw new AssertionError();
        if (Main.isValidEmail("@missingusername.com")) throw new AssertionError();
        if (Main.isValidEmail(null)) throw new AssertionError();
        System.out.println("PASS: 7.1 Conformance");
    }
}
