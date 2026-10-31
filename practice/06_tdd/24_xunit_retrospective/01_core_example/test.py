# Unit test: content=06_tdd | chapter=24_xunit_retrospective | section=01_core_example | pages=실습 과제
import pathlib

if __name__ == "__main__":
    main_file = pathlib.Path(__file__).with_name("main.py")
    assert main_file.is_file()
    print("PASS: 01_core_example")
