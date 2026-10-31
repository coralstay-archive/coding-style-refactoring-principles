# -*- coding: utf-8 -*-
"""
Domain 4: 패턴 진화 & 레거시 개선 (Patterns & Legacy Remediation)
기반 도서: 《레거시 코드 활용 전략 (Michael Feathers)》, 《패턴을 활용한 리팩터링》
"""

ITEMS = [
    {
        "section_dir": "04_legacy_and_patterns",
        "section_title": "도메인 4. 패턴 진화 & 레거시 개선 (Patterns & Legacy Remediation)",
        "num": "01",
        "slug": "break_dependency_with_seam",
        "title": "01. 접합부(Seam)를 통한 레거시 의존성 분리 (Subclass and Override)",
        "book_reference": "레거시 코드 활용 전략 4장 (접합 모델), 25장 (서브클래스화 및 메서드 재정의)",
        "smell_or_issue": r"""- 테스트 환경에서 실행 불가능한 하드웨어 센서, 원격 DB, 시스템 전역 시계 등을 클래스 내부에서 직접 호출하고 있어 단위 테스트 하네스에 올릴 수 없음 (객체 생성 불가 / 실행 불가).""",
        "concept": r"""- **접합부 (Seam)**:
  그 자리의 코드를 직접 수정하지 않고도 프로그램의 동작을 변경할 수 있는 위치.
- **서브클래스화 및 메서드 재정의 (Subclass and Override Method)**:
  외부 하드웨어나 전역 의존성을 호출하는 부분을 가상 메서드로 감싸고, 테스트 코드에서 해당 클래스를 상속받은 가짜 서브클래스(Test-Specific Subclass)를 만들어 해당 메서드를 재정의함으로써 의존성을 완벽히 끊어냅니다.""",
        "bad_code": r"""#include <string>
#include <iostream>

// 실제 운영 환경에서만 동작하고 단위 테스트에서는 실행 불가능한 외부 센서 함수
inline double readHardwareTemperatureSensor() {
    // 실제 장비에 연결되어 있지 않으면 크래시가 발생한다고 가정
    throw std::runtime_error("하드웨어 장치에 연결할 수 없습니다!");
}

// [Bad Code] 하드웨어 의존성이 코드 내부에 하드코딩되어 단위 테스트 불가능
class TemperatureMonitor {
public:
    std::string checkStatus() {
        // 단위 테스트 환경에서는 무조건 예외가 터져서 테스트 불가능
        double temp = readHardwareTemperatureSensor();
        if (temp > 100.0) {
            return "DANGER";
        }
        return "NORMAL";
    }
};
""",
        "good_code": r"""#include <string>
#include <stdexcept>

// [Good Code] 접합부(Seam)를 제공하여 테스트 가능한 구조로 변경
class TemperatureMonitor {
protected:
    // 객체 지향 접합부(Object Seam): 가상 메서드로 감싸서 테스트에서 재정의 가능하게 개방
    virtual double getTemperature() const {
        // 기본 구현: 실제 하드웨어 센서 호출
        // throw std::runtime_error("하드웨어 장치에 연결할 수 없습니다!");
        return 25.0; // 시뮬레이션 기본값
    }

public:
    virtual ~TemperatureMonitor() = default;

    [[nodiscard]] std::string checkStatus() const {
        const double temp = getTemperature();
        if (temp > 100.0) {
            return "DANGER";
        }
        return "NORMAL";
    }
};
""",
        "test_code": r"""#include <gtest/gtest.h>

// 테스트 전용 서브클래스 (Test-Specific Subclass)
// 운영 코드를 전혀 건드리지 않고 센서 반환값만 가로챔 (Seam 활용)
class TestableTemperatureMonitor : public TemperatureMonitor {
public:
    double mockTemperature = 25.0;

protected:
    double getTemperature() const override {
        return mockTemperature;
    }
};

TEST(LegacySeamTest, StatusIsNormalWhenTempBelowThreshold) {
    TestableTemperatureMonitor monitor;
    monitor.mockTemperature = 85.0;
    EXPECT_EQ(monitor.checkStatus(), "NORMAL");
}

TEST(LegacySeamTest, StatusIsDangerWhenTempExceedsThreshold) {
    TestableTemperatureMonitor monitor;
    monitor.mockTemperature = 105.0;
    EXPECT_EQ(monitor.checkStatus(), "DANGER");
}
""",
        "steps": [
            "Step 1: 외부 의존성(하드웨어, DB, 시간 등) 호출부를 protected virtual double getTemperature() 가상 메서드로 추출합니다.",
            "Step 2: 비즈니스 로직(checkStatus)이 추출된 가상 메서드를 호출하도록 연결합니다.",
            "Step 3: 테스트 코드에서 TestableTemperatureMonitor를 상속받아 원하는 가짜 온도를 반환하도록 오버라이딩합니다.",
            "Step 4: 실제 하드웨어 없이도 정상/경고 케이스를 100% 신뢰성 있게 검증합니다."
        ]
    },
    {
        "section_dir": "04_legacy_and_patterns",
        "section_title": "도메인 4. 패턴 진화 & 레거시 개선 (Patterns & Legacy Remediation)",
        "num": "02",
        "slug": "sprout_method_safe_addition",
        "title": "02. 안전한 기능 추가: 신규 메서드 발아 (Sprout Method)",
        "book_reference": "레거시 코드 활용 전략 6장 (고칠 것은 많고 시간은 없다)",
        "smell_or_issue": r"""- 500줄짜리 복잡하고 테스트조차 없는 괴물 함수에 새로운 요구사항(중복 아이템 필터링)을 추가해야 함.
- 괴물 함수의 중간에 인라인으로 코드를 우겨넣다 보면 기존 기능이 망가질 위험(회귀 버그)이 극도로 높음.""",
        "concept": r"""- **신규 메서드 발아 (Sprout Method)**:
  기존 괴물 함수를 직접 수정하여 위험을 감수하는 대신, 새롭게 추가할 기능만 독립된 새로운 순수 함수/메서드로 '발아(Sprout)'시킵니다.
  새로 만든 발아 메서드는 TDD를 통해 철저하게 단위 테스트를 작성하여 검증하고, 기존 레거시 함수에서는 단 한 줄로 이 메서드를 호출하기만 합니다.""",
        "bad_code": r"""#include <vector>
#include <string>

// [Bad Code] 500줄짜리 복잡한 레거시 함수 중간에 인라인으로 중복 제거 코드를 끼워 넣으려는 시도
class TransactionBatchProcessor {
public:
    void executeMassiveBatch(std::vector<std::string>& entries) {
        // ... (수백 줄의 복잡하고 위험한 레거시 처리 로직) ...
        
        // 여기에 검증되지 않은 중복 제거 루프를 직접 덕지덕지 작성하면 사이드 이펙트 발생 위험 극대화!
        // ...
    }
};
""",
        "good_code": r"""#include <vector>
#include <string>
#include <unordered_set>

// [Good Code] 신규 요구사항(고유 항목 필터링)을 독립된 발아 메서드(Sprout Method)로 추출
class TransactionBatchProcessor {
public:
    // 신규 발아 메서드: 독립적으로 격리되어 있어 단위 테스트 작성이 매우 쉬움
    static std::vector<std::string> filterUniqueEntries(const std::vector<std::string>& input) {
        std::vector<std::string> uniqueList;
        std::unordered_set<std::string> seen;

        for (const auto& item : input) {
            if (seen.insert(item).second) {
                uniqueList.push_back(item);
            }
        }
        return uniqueList;
    }

    void executeMassiveBatch(std::vector<std::string>& entries) {
        // 기존 레거시 코드에서는 단 1줄로 검증된 발아 메서드를 호출
        const auto filtered = filterUniqueEntries(entries);

        // ... (기존 레거시 로직 수행) ...
    }
};
""",
        "test_code": r"""#include <gtest/gtest.h>

// 발아 메서드(Sprout Method)에 대해 완벽한 단위 테스트 수행
TEST(SproutMethodTest, FilterOutDuplicatesPreservingOrder) {
    std::vector<std::string> raw = {"TX1", "TX2", "TX1", "TX3", "TX2"};
    std::vector<std::string> expected = {"TX1", "TX2", "TX3"};

    auto result = TransactionBatchProcessor::filterUniqueEntries(raw);
    EXPECT_EQ(result, expected);
}

TEST(SproutMethodTest, HandlesEmptyListGracefully) {
    std::vector<std::string> empty;
    auto result = TransactionBatchProcessor::filterUniqueEntries(empty);
    EXPECT_TRUE(result.empty());
}
""",
        "steps": [
            "Step 1: 새로 추가할 기능(중복 제거 및 순서 보존)을 명확히 식별합니다.",
            "Step 2: 기존 레거시 메서드에 코드를 섞지 않고, 독립된 filterUniqueEntries 발아 메서드를 작성합니다.",
            "Step 3: 발아 메서드에 대해 단위 테스트를 작성하여 100% 동작을 검증합니다.",
            "Step 4: 기존 거대 메서드에서 검증된 발아 메서드를 안전하게 호출하도록 연결합니다."
        ]
    }
]
