// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/06_parameterized_and_dynamic/04_method_source/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class Rectangle {
        public final int width, height;
        public Rectangle(int w, int h) { this.width = w; this.height = h; }
        public int getArea() { return width * height; }
    }
    public static void main(String[] args) {
        System.out.println("[Tudose 6.4] Area: " + new Rectangle(4, 5).getArea());
    }
}
