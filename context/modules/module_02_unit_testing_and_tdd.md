# Module 02: Unit Testing, TDD & Verification
*(Deep-dive context based on "Unit Testing (Khorikov)", "TDD by Example", "Pragmatic Unit Testing")*

## 1. Resistance to Refactoring (The #1 Pillar)
- Unit tests must test **observable outcomes**, not implementation details.
- Avoid interaction testing (e.g., asserting that private method `_doStep1()` was called or counting calls on internal helper objects).
- If refactoring internal code structure without changing requirements causes tests to fail (False Positive), the test design is flawed.

## 2. Test Doubles Strategy: Detroit (Classical) vs London
- Default to Detroit School: Use real dependencies for domain models, algorithms, and in-memory collaborators.
- Only mock unmanaged external dependencies at architectural boundaries (e.g., SMTP servers, payment gateways, message queues).
- Distinguish Mocks from Stubs:
  - **Stubs**: Provide canned indirect input (do not assert on stubs).
  - **Mocks**: Verify outward communication that represents an external side-effect.

## 3. Test Design Checklist: Right-BICEP & CORRECT
- **Right**: Does the happy path produce expected results?
- **Boundary**: Test min/max limits, empty collections, zero values.
- **Inverse**: Verify inverse operations (encode/decode, serialize/deserialize).
- **Cross-check**: Compare results with alternative or simpler implementations.
- **Error Conditions**: Force timeouts, bad inputs, resource exhaustion.
- **Performance**: Ensure critical loops run within bounded complexity.
- **CORRECT boundaries**: Conformance, Ordering, Range, Reference, Existence (null/0), Cardinality (0, 1, many), Time (latency, sequence).

## 4. Test Structure: AAA Pattern
- **Arrange**: Set up fixtures, state, and test inputs.
- **Act**: Execute the single unit under test.
- **Assert**: Verify results against expectations.
- Keep test methods clean and readable: one logical assertion per test concept.
