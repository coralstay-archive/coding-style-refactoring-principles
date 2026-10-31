// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/07_generalization_refactorings/02_extract_adapter/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public interface Target { int getVal(); }
    public static class Adaptee { public int fetchSpecific() { return 999; } }
    public static class Adapter implements Target {
        private final Adaptee a;
        public Adapter(Adaptee a) { this.a = a; }
        public int getVal() { return a.fetchSpecific(); }
    }
    public static void main(String[] args) {
        Target t = new Adapter(new Adaptee());
        System.out.println("[RFP 7.2] 어댑터 연결 값: " + t.getVal());
    }
}
