// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/01_compose_method/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static class TaskRunner {
        public String run() {
            return stepOne() + " -> " + stepTwo();
        }
        private String stepOne() { return "Step 1: Init"; }
        private String stepTwo() { return "Step 2: Done"; }
    }
    public static void main(String[] args) {
        System.out.println("[RFP 6.1] 합성된 메서드: " + new TaskRunner().run());
    }
}
