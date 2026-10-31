// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/04_adapt_parameter/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class HeavyLegacyParam {
public:
    std::string getNetworkData() { return "RemoteServerPayload"; }
};

class IParamAdapter {
public:
    virtual ~IParamAdapter() = default;
    virtual std::string getData() = 0;
};

class RealAdapter : public IParamAdapter {
    HeavyLegacyParam* param;
public:
    RealAdapter(HeavyLegacyParam* p) : param(p) {}
    std::string getData() override { return param->getNetworkData(); }
};

class BusinessService {
public:
    std::string process(IParamAdapter* adapter) {
        return "Processed: " + adapter->getData();
    }
};

int main() {
    HeavyLegacyParam heavy;
    RealAdapter adapter(&heavy);
    BusinessService svc;
    std::cout << "[Legacy 25.1] " << svc.process(&adapter) << "\n";
    return 0;
}
