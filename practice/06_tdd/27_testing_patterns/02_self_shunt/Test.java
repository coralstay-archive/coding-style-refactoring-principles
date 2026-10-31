// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/27_testing_patterns/02_self_shunt/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test implements AlertListener {
    private boolean alertReceived = false;
    private String message = "";

    public void onAlert(String alertMessage) {
        this.alertReceived = true;
        this.message = alertMessage;
    }

    public static void main(String[] args) {
        Test testInstance = new Test();
        TemperatureSensor sensor = new TemperatureSensor();
        sensor.setAlertListener(testInstance); // 셀프 션트

        sensor.checkTemperature(80);
        assert !testInstance.alertReceived;

        sensor.checkTemperature(105);
        assert testInstance.alertReceived;
        assert testInstance.message.contains("OVERHEAT");

        System.out.println("PASS: 27.2 Self Shunt");
    }
}
