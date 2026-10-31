# Module 01: Code Quality, Contracts & Micro-Design
*(Deep-dive context based on "Good Code, Bad Code" & "Code Complete 2")*

## 1. Single Level of Abstraction (SLAP)
- High-level business flow should not be intermixed with raw string parsing, low-level socket operations, or SQL queries.
- Extract lower-level operations into dedicated, well-named helper functions or classes.

## 2. Hard to Misuse APIs
- Avoid boolean flags in function signatures: `calculate(true, false, true)` ➔ use dedicated functions or enum options.
- Constructor validation: Never instantiate half-initialized objects. Validate invariants inside constructors and fail immediately with clear domain exceptions or error types.
- Overcome Primitive Obsession: Wrap raw strings/integers in rich Domain Types (e.g., `EmailAddress`, `Money`, `OrderId`) to enforce validity at compile-time.

## 3. Explicit Error Handling (Fail Fast)
- Distinguish recoverable errors from unrecoverable programmer errors.
- Unrecoverable errors (e.g., violated invariants, null pointers in non-null fields): Assert/crash immediately.
- Recoverable errors (e.g., missing file, network timeout): Express explicitly in return types (`std::optional`, `std::expected`, `Result<T, E>`) rather than returning magic error codes (-1, null, false).
- Never write empty catch blocks (`catch (...) {}`). Every exception caught must be either handled, translated into a domain exception, or logged and rethrown.

## 4. Immutability by Default
- Treat all variables, method parameters, and object state as immutable by default.
- Minimize mutable state. When state must change, return a new instance or localize state mutations inside small, encapsulated classes.
