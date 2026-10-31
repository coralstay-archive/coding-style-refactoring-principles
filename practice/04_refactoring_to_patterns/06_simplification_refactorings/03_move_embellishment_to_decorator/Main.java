// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/03_move_embellishment_to_decorator/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public interface TextWriter { String write(String text); }
    public static class PlainWriter implements TextWriter { public String write(String text) { return text; } }
    public static class UppercaseDecorator implements TextWriter {
        private final TextWriter inner;
        public UppercaseDecorator(TextWriter inner) { this.inner = inner; }
        public String write(String text) { return inner.write(text).toUpperCase(); }
    }
    public static void main(String[] args) {
        TextWriter writer = new UppercaseDecorator(new PlainWriter());
        System.out.println("[RFP 6.3] 데코레이터 결과: " + writer.write("hello"));
    }
}
