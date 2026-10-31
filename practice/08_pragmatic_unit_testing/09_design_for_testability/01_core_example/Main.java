// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/09_design_for_testability/01_core_example/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public interface Greeter { String greet(); }
    public static class ConsoleGreeter implements Greeter {
        public String greet() { return "Hello, World!"; }
    }
    public static void main(String[] args) {
        Greeter g = new ConsoleGreeter();
        System.out.println("[Pragmatic JUnit Ch 9] " + g.greet());
    }
}
