# NIS America Store – UI Test Automation
This repository contains Playwright-based UI automation for key user-facing flows in the NIS America Store.
The focus is on **realistic automation**, clean structure, and decisions that reflect how testing works in production environments — including when *not* to automate certain things.

---

## What's Covered

### Careers & Job Application
- Careers page navigation
- Job listing access and selection
- Apply form UI validation and required-field handling
- Smoke coverage for business-critical user journeys

### Authentication (CAPTCHA-Aware)
- Login and registration UI validation
- Client-side form behavior
- Required-field handling
- Navigation and URL state verification

Authentication submission is intentionally excluded due to CAPTCHA protection. Tests validate what users can see and interact with, without forcing automation where it isn't appropriate.

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
- @faker-js/faker for dynamic test data

---

## Project Structure
```text
nisamerica-petproject/
│
├── pages/                  # Page Object Models
│   ├── CareersPage.js
│   ├── ApplyForm.js
│   ├── StoreHomePage.js
│   ├── LoginPage.js
│   └── RegistrationPage.js
│
├── fixtures/               # Custom fixtures
│   ├── login.fixture.js
│   └── registration.fixture.js
│
├── tests/                  # Test specs
│   ├── careersNavigation.spec.js
│   ├── applyForm.spec.js
│   ├── login.spec.js
│   └── registration.spec.js
│
├── test-data/              # Static test assets
│   └── resume.txt
│
├── utils/                  # Test utilities
│   └── userData.js
│
├── playwright.config.cjs
├── package.json
├── .gitignore
└── README.md
```

---

## Refactoring & Maintainability
The codebase was intentionally refactored to:
- Use fixtures to centralize page setup and navigation while keeping individual tests focused on UI behavior
- Avoid cross-feature coupling
- Keep tests easy to read and extend

The emphasis is on **clarity and intent**, not just test volume.

---

## Purpose of This Repo
This project demonstrates:
- Practical UI automation under real-world constraints
- Thoughtful scoping decisions
- Maintainable test architecture

It reflects how modern QA teams balance coverage, stability, and long-term maintainability.

