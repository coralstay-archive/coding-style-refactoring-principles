// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/09_accumulation_refactorings/01_move_accumulation_to_visitor/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public interface Node { void accept(NodeVisitor visitor); }
    public interface NodeVisitor { void visitText(String text); }
    public static class TextNode implements Node {
        private final String text;
        public TextNode(String text) { this.text = text; }
        public void accept(NodeVisitor visitor) { visitor.visitText(this.text); }
    }
    public static class WordCountVisitor implements NodeVisitor {
        public int words = 0;
        public void visitText(String text) {
            if (text != null && !text.isEmpty()) words += text.split("\\s+").length;
        }
    }
    public static void main(String[] args) {
        WordCountVisitor visitor = new WordCountVisitor();
        new TextNode("Refactoring to Patterns").accept(visitor);
        System.out.println("[RFP 9.1] 비지터 단어 집계: " + visitor.words);
    }
}
