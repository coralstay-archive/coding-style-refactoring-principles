// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/10_refactoring_away/01_inline_singleton/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Registry {
        public String lookup(String key) { return "val_" + key; }
    }
    public static void main(String[] args) {
        Registry reg = new Registry();
        System.out.println("[RFP 10.1] 싱글톤 제거 후 단순화: " + reg.lookup("test"));
    }
}
