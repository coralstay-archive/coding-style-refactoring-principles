// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 1] 코드 품질의 핵심 목표 모델
export interface CodeQualityMetrics {
    isWorking: boolean;
    keepsWorking: boolean;
    adaptableToChange: boolean;
    preventsDuplication: boolean;
}

export function evaluateCodeQuality(metrics: CodeQualityMetrics): boolean {
    return metrics.isWorking && metrics.keepsWorking && metrics.adaptableToChange && metrics.preventsDuplication;
}

console.log("[Good Code Ch 1] 품질 충족:", evaluateCodeQuality({
    isWorking: true, keepsWorking: true, adaptableToChange: true, preventsDuplication: true
}));
