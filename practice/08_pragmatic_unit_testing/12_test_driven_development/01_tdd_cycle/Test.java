// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/12_test_driven_development/01_tdd_cycle/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Profile p = new Main.Profile();
        p.addScore(25);
        if (p.getScore() != 25) throw new AssertionError();
        System.out.println("PASS: 12.1 Test");
    }
}
