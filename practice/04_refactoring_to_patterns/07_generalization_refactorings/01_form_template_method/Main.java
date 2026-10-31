// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/07_generalization_refactorings/01_form_template_method/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static abstract class ReportGenerator {
        public String generate() {
            return formatHeader() + " | " + formatBody();
        }
        protected abstract String formatHeader();
        protected abstract String formatBody();
    }
    public static class HtmlReport extends ReportGenerator {
        protected String formatHeader() { return "<h1>Header</h1>"; }
        protected String formatBody() { return "<p>Body</p>"; }
    }
    public static void main(String[] args) {
        System.out.println("[RFP 7.1] 템플릿 메서드: " + new HtmlReport().generate());
    }
}
