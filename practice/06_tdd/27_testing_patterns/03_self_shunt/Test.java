// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/27_testing_patterns/03_self_shunt/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test implements Main.AlertListener {
    private boolean alertReceived = false;
    private String lastMessage = "";

    @Override
    public void onAlert(String message) {
        this.alertReceived = true;
        this.lastMessage = message;
    }

    public void run() {
        Main.Sensor sensor = new Main.Sensor(this); // Self-Shunt: 나 자신이 리스너!
        sensor.trigger(120);
        if (!alertReceived || !"OVERHEAT".equals(lastMessage)) {
            throw new AssertionError("Self Shunt verification failed");
        }
        System.out.println("PASS: 27.3 Self Shunt");
    }

    public static void main(String[] args) {
        new Test().run();
    }
}
