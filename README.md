# UI Login and Registration Test Validation (CAPTCHA-Safe)

This branch contains Playwright-based UI validation tests for the **Login** and **Registration** pages of the NIS America Store.

These flows are protected by CAPTCHA, so the tests here intentionally focus on **user-facing UI behavior** rather than form submission or authentication. The goal is to validate what a user can see and interact with, while respecting production safeguards.

---

## What These Tests Validate

The tests in this branch focus on stable, client-side behavior:

- Access to login and registration pages
- Visibility of required fields and actions
- Client-side form behavior and required-field handling
- Navigation and URL state
- Prevention of submission when required input is missing

---

## Scope Decisions 

The following are **intentionally out of scope**:

- UI-based authentication
- Account creation
- CAPTCHA bypassing or mocking

CAPTCHA exists to block automation. Attempting to work around it would introduce brittle tests and false confidence.

In a production environment, authenticated scenarios would be handled using:
- API-based authentication
- Storage state reuse
- Token or cookie injection

---

## Structure & Approach

This branch uses:

- Page Object Models for Login, Registration, and Store Home
- Scoped Playwright fixtures to centralize navigation and page setup
- Test data utilities for realistic input
- A clean Playwright configuration

Fixtures are used to prepare **UI context** so individual tests can stay focused on validation logic rather than setup steps.

---

## Design Notes

- Tests are isolated and deterministic
- Setup logic is handled through fixtures, not duplicated in tests
- UI validation is kept independent from backend authentication concerns

The code was refactored to keep responsibilities clear and avoid unnecessary coupling between features.

