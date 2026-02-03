# NIS America Store – UI Test Automation

This repository contains Playwright-based UI automation for key user-facing flows in the NIS America Store.

The focus is on **realistic automation**, clean structure, and decisions that reflect how testing works in production environments — including when *not* to automate certain things.

---

## What’s Covered

### Careers & Job Application
- Careers page navigation
- Job listing access
- Apply form UI validation
- Smoke coverage for user journeys

### Authentication (CAPTCHA-Aware)
- Login and registration UI validation
- Client-side form behavior
- Required-field handling
- Navigation and URL state verification

Authentication submission is intentionally excluded due to CAPTCHA protection.

---

## Testing Philosophy

- Automate what is stable and user-visible
- Respect production constraints (like CAPTCHA)
- Keep tests deterministic and readable
- Use Page Object Model for maintainability
- Prefer clean setup over complex teardown

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)
- Custom Fixtures

---

## Refactoring & Maintainability

The codebase was intentionally refactored to:
- used fixtures to centralize page setup and navigation while keeping individual tests focused on UI behavior
- avoid cross-feature coupling
- keep tests easy to read and extend

The emphasis is on **clarity and intent**, not just test volume.

---

## Purpose of This Repo

This project demonstrates:
- practical UI automation under real-world constraints
- thoughtful scoping decisions
- maintainable test architecture

It reflects how modern QA teams balance coverage, stability, and long-term maintainability.
