// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/13_testing_tough_stuff/01_multithreading_and_db/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.ThreadSafeCounter c = new Main.ThreadSafeCounter();
        c.increment();
        c.increment();
        if (c.get() != 2) throw new AssertionError();
        System.out.println("PASS: 13.1 Test");
    }
}
