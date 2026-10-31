# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/20_cleaning_up_after/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

# [TDD Ch 20] tearDown 보장
class TestCase:
    def __init__(self, name):
        self.name = name

    def setUp(self): pass
    def tearDown(self): pass

    def run(self):
        self.setUp()
        try:
            method = getattr(self, self.name)
            method()
        finally:
            self.tearDown()

class WasRun(TestCase):
    def setUp(self): self.log = "setUp "
    def testMethod(self): self.log += "testMethod "
    def tearDown(self): self.log += "tearDown "

if __name__ == "__main__":
    t = WasRun("testMethod")
    t.run()
    print(f"[TDD Ch 20] 로그: {t.log}")
