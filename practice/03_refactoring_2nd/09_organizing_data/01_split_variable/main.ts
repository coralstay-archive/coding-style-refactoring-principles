// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/09_organizing_data/01_split_variable/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

export function distanceTraveled(scenario: { acc1: number; time1: number; acc2: number; time2: number }): number {
    // 1차 이동 거리
    const primaryDistance = 0.5 * scenario.acc1 * scenario.acc1 * scenario.time1;
    const secondaryTime = scenario.time2;
    const primaryVelocity = scenario.acc1 * scenario.time1;
    // 2차 이동 거리 (별도 변수 사용)
    const secondaryDistance = primaryVelocity * secondaryTime + 0.5 * scenario.acc2 * secondaryTime * secondaryTime;
    return primaryDistance + secondaryDistance;
}

console.log("[Fowler 9.1] Distance:", distanceTraveled({ acc1: 2, time1: 3, acc2: 1, time2: 4 }));
