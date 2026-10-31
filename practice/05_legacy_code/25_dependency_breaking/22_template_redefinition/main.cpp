// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/22_template_redefinition/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class LinuxSocket {
public:
    std::string read() { return "RawNetworkSocketBytes"; }
};

template <typename SocketPolicy>
class NetworkReader {
    SocketPolicy socket;
public:
    std::string readMessage() {
        return "Msg: " + socket.read();
    }
};

int main() {
    NetworkReader<LinuxSocket> reader;
    std::cout << "[Legacy 25.22] " << reader.readMessage() << "\n";
    return 0;
}
