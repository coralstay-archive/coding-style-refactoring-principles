// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/08_time_aspects/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static class SessionToken {
        private final long createdAtMs;
        private final long ttlMs;
        public SessionToken(long created, long ttl) {
            this.createdAtMs = created;
            this.ttlMs = ttl;
        }
        public boolean isValidAt(long currentMs) {
            return (currentMs >= createdAtMs) && (currentMs <= createdAtMs + ttlMs);
        }
    }
    public static void main(String[] args) {
        SessionToken token = new SessionToken(1000, 500);
        System.out.println("[Langr 7.7] Valid at 1200: " + token.isValidAt(1200));
    }
}
