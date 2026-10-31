// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/12_test_driven_development/01_tdd_cycle/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static class Profile {
        private int score = 0;
        public void addScore(int delta) { score += delta; }
        public int getScore() { return score; }
    }
    public static void main(String[] args) {
        Profile p = new Profile();
        p.addScore(10);
        System.out.println("[Pragmatic 12.1] TDD 점수: " + p.getScore());
    }
}
