// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/05_creation_refactorings/02_encapsulate_classes_with_factory/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public interface Node { String render(); }
    static class StringNode implements Node {
        private final String text;
        StringNode(String t) { this.text = t; }
        public String render() { return text; }
    }
    public static class NodeFactory {
        public static Node createStringNode(String text) { return new StringNode(text); }
    }
    public static void main(String[] args) {
        Node n = NodeFactory.createStringNode("Hello");
        System.out.println("[RFP 5.2] 팩터리 캡슐화 노드: " + n.render());
    }
}
