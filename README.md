# NIS America – UI Test Automation

This repository contains a Playwright-based UI automation project built against a real production website. The focus is on validating user-facing behavior in a way that reflects real-world testing constraints and best practices.

The project covers the **Careers** flow on the NIS America site, including navigation to a Quality Assurance position and interaction with the application form. Tests intentionally stop short of submitting data to the server and instead validate client-side behavior and form handling.

---

## What’s Covered

- Careers page navigation
- Job listing access and selection
- Apply form UI behavior and required-field handling
- Smoke coverage for a business-critical user journey

Tests are designed to validate what users can see and interact with, without forcing automation where it isn’t appropriate.

---

## Tech Stack

- **Playwright** (JavaScript)
- **Node.js**
- **@faker-js/faker** for dynamic test data
- **Page Object Model (POM)**
- **GitHub** for version control

---

## Project Structure

```text
nisamerica-petproject/
│
├── pages/                  # Page Object Models
│   ├── CareersPage.js
│   └── ApplyForm.js
│
├── tests/                  # Test specs
│   ├── careersNavigation.spec.js
│   └── applyForm.spec.js
│
├── test-data/               # Static test assets
│   └── resume.txt
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md


