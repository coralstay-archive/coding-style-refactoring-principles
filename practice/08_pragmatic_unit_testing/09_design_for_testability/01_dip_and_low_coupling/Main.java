// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/09_design_for_testability/01_dip_and_low_coupling/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public interface Clock { long now(); }
    public static class SystemClock implements Clock { public long now() { return System.currentTimeMillis(); } }
    public static class Logger {
        private final Clock clock;
        public Logger(Clock clock) { this.clock = clock; }
        public String log(String msg) { return "[" + clock.now() + "] " + msg; }
    }
    public static void main(String[] args) {
        Logger logger = new Logger(new SystemClock());
        System.out.println("[Pragmatic 9.1] 테스트 가능한 로거 생성 완료");
    }
}
