// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_07_time/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static boolean isWithinDeadline(long startMs, long nowMs, long timeoutMs) {
        return (nowMs - startMs) <= timeoutMs;
    }
    public static void main(String[] args) {
        System.out.println("[CORRECT: Time] 마감 내 완료: " + isWithinDeadline(1000, 1500, 1000));
    }
}
