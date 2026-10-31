# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/18_first_steps_to_xunit/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

# [TDD Ch 18] WasRun 테스트 러너 기초
class TestCase:
    def __init__(self, name):
        self.name = name

    def run(self):
        method = getattr(self, self.name)
        method()

class WasRun(TestCase):
    def __init__(self, name):
        super().__init__(name)
        self.wasRun = None

    def testMethod(self):
        self.wasRun = 1

if __name__ == "__main__":
    test = WasRun("testMethod")
    print(f"[TDD Ch 18] 실행 전: {test.wasRun}")
    test.run()
    print(f"[TDD Ch 18] 실행 후: {test.wasRun}")
