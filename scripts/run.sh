#!/usr/bin/env bash
# ==============================================================================
# 다국어 통합 예제 실행기 (Universal Multi-Language Runner)
# 공식 런타임 표준:
#   - TypeScript 7.x (ESNext / ts-node)
#   - Java 25 LTS (OpenJDK 25 / 26)
#   - Python 3.15.1 / 3.14 (Python.org 공식 릴리즈)
#   - C++17 / C++20 (Clang++ / G++)
#
# 사용법:
#   ./scripts/run.sh <예제_폴더_경로>          # main 실행
#   ./scripts/run.sh <예제_폴더_경로> --test   # test 실행
# ==============================================================================

set -e

export PATH="/opt/homebrew/opt/openjdk/bin:/opt/homebrew/bin:$PATH"

if [ -z "$1" ]; then
    echo "Usage: $0 <path_to_example_dir> [--test]"
    echo "Example: $0 tracks/03_refactoring_2nd/01_first_example/01_theater_statement --test"
    exit 1
fi

TARGET_DIR="$1"
MODE="main"
if [ "$2" == "--test" ] || [ "$2" == "-t" ] || [ "$2" == "test" ]; then
    MODE="test"
fi

if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Error: Directory '$TARGET_DIR' does not exist."
    exit 1
fi

cd "$TARGET_DIR"
echo "📂 Working directory: $(pwd)"
echo "🎯 Mode: $MODE"

# 1. C++ Detection (.cpp)
if [ -f "${MODE}.cpp" ] || [ -f "main.cpp" ]; then
    BIN_NAME="build_runner_tmp.out"
    CXX_WRAPPER="$(dirname "$0")/cxx_wrapper.sh"
    CXX_CMD="g++"
    if [ -f "$CXX_WRAPPER" ]; then
        CXX_CMD="$CXX_WRAPPER g++"
    fi
    
    if [ "$MODE" == "test" ] && [ -f "test.cpp" ] && [ -f "main.cpp" ]; then
        echo "🔷 Detected C++ Test: bundling main.cpp + test.cpp"
        WRAPPER_CPP="bundled_test_runner_tmp.cpp"
        cat << 'EOF' > "$WRAPPER_CPP"
#define main main_app_disabled_for_test
#include "main.cpp"
#undef main
#include "test.cpp"
EOF
        $CXX_CMD -std=c++17 "$WRAPPER_CPP" -o "$BIN_NAME" 2>/dev/null || \
        $CXX_CMD -std=c++17 "$WRAPPER_CPP" -lgtest -lgtest_main -pthread -o "$BIN_NAME"
        rm -f "$WRAPPER_CPP"
    else
        SRC_FILE="${MODE}.cpp"
        if [ ! -f "$SRC_FILE" ]; then SRC_FILE="main.cpp"; fi
        echo "🔷 Detected C++ source: $SRC_FILE"
        $CXX_CMD -std=c++17 "$SRC_FILE" -o "$BIN_NAME" 2>/dev/null || \
        $CXX_CMD -std=c++17 "$SRC_FILE" -lgtest -lgtest_main -pthread -o "$BIN_NAME"
    fi

    ./"$BIN_NAME"
    rm -f "$BIN_NAME"
    exit 0
fi

# 2. TypeScript / JavaScript Detection (.ts / .js)
if [ -f "${MODE}.ts" ] || [ -f "main.ts" ]; then
    SRC_FILE="${MODE}.ts"
    if [ ! -f "$SRC_FILE" ]; then SRC_FILE="main.ts"; fi
    echo "🟨 Detected TypeScript source: $SRC_FILE"
    TS_RUNNER=$(which ts-node 2>/dev/null || echo "/opt/homebrew/bin/ts-node")
    node "$TS_RUNNER" "$SRC_FILE"
    exit 0
fi

# 3. Java Detection (.java)
JAVA_FILE=""
if [ "$MODE" == "test" ]; then
    JAVA_FILE=$(ls *Test*.java 2>/dev/null | head -n 1 || true)
    if [ -z "$JAVA_FILE" ] && [ -f "test.java" ]; then JAVA_FILE="test.java"; fi
else
    JAVA_FILE=$(ls *Main*.java 2>/dev/null | head -n 1 || true)
    if [ -z "$JAVA_FILE" ] && [ -f "main.java" ]; then JAVA_FILE="main.java"; fi
fi

if [ -n "$JAVA_FILE" ] && [ -f "$JAVA_FILE" ]; then
    echo "☕ Detected Java source: $JAVA_FILE"
    CLASS_NAME=$(basename "$JAVA_FILE" .java)
    javac -encoding UTF-8 *.java
    java -ea "$CLASS_NAME"
    rm -f *.class
    exit 0
fi

# 4. Python Detection (.py)
if [ -f "${MODE}.py" ] || [ -f "main.py" ] || [ -f "test_main.py" ]; then
    SRC_FILE="${MODE}.py"
    if [ "$MODE" == "test" ] && [ -f "test_main.py" ]; then
        SRC_FILE="test_main.py"
    elif [ ! -f "$SRC_FILE" ]; then
        SRC_FILE="main.py"
    fi
    echo "🐍 Detected Python source: $SRC_FILE"
    python3 "$SRC_FILE"
    exit 0
fi

echo "❌ Error: No runnable source code (.cpp, .ts, .java, .py) found in '$TARGET_DIR'."
exit 1
