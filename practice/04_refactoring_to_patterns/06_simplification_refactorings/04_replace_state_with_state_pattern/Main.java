// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/04_replace_state_with_state_pattern/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public interface State { String handle(); }
    public static class OnState implements State { public String handle() { return "POWER_ON"; } }
    public static class OffState implements State { public String handle() { return "POWER_OFF"; } }
    public static void main(String[] args) {
        State current = new OnState();
        System.out.println("[RFP 6.4] 현재 상태: " + current.handle());
    }
}
