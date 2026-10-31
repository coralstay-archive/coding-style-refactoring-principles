# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/19_set_the_table/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

# [TDD Ch 19] setUp 메서드 자동 호출
class TestCase:
    def __init__(self, name):
        self.name = name

    def setUp(self):
        pass

    def run(self):
        self.setUp()
        method = getattr(self, self.name)
        method()

class WasRun(TestCase):
    def setUp(self):
        self.wasRun = None
        self.wasSetUp = 1

    def testMethod(self):
        self.wasRun = 1

if __name__ == "__main__":
    test = WasRun("testMethod")
    test.run()
    print(f"[TDD Ch 19] wasSetUp: {test.wasSetUp}, wasRun: {test.wasRun}")
