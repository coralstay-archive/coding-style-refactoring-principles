// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/05_readable_code/5.2_proper_comments/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function calculateWorkaroundTimeout(): number {
    // 서드파티 레거시 API의 응답 지연 문제를 회피하기 위해 기본 타임아웃을 5초로 연장함
    return 5000;
}
console.log("[Good Code 5.2] 회피 타임아웃:", calculateWorkaroundTimeout());
