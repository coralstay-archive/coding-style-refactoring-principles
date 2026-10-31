// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/08_time_aspects/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.SessionToken token = new Main.SessionToken(1000, 500);
        if (!token.isValidAt(1000)) throw new AssertionError("Start boundary failed");
        if (!token.isValidAt(1500)) throw new AssertionError("End boundary failed");
        if (token.isValidAt(1501)) throw new AssertionError("Expired token allowed");
        if (token.isValidAt(999)) throw new AssertionError("Premature token allowed");
        System.out.println("PASS: 7.7 CORRECT Time Aspects");
    }
}
