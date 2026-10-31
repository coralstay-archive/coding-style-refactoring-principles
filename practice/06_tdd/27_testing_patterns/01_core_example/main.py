# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/27_testing_patterns/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

class DummyFile:
    def read(self): raise IOError("강제 디스크 오류")

if __name__ == "__main__":
    d = DummyFile()
    try:
        d.read()
    except IOError:
        print("[TDD Ch 27] 크래시 더미 예외 포착 성공")
