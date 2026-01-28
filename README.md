# nisamerica-petproject
# NIS America – QA Automation Pet Project

This repository contains a Playwright-based QA automation pet project created to demonstrate practical test automation skills using a real-world production website.

The project focuses on validating the **Careers** flow on the NIS America website, including navigation to a Quality Assurance position and interaction with the application form **without submitting data to the server**.

---

## 🚀 Tech Stack

- **Playwright** (JavaScript)
- **Node.js**
- **@faker-js/faker** – dynamic test data generation
- **Page Object Model (POM)**
- **GitHub** – version control

---

## 📁 Project Structure

```text
nisamerica-petproject/
│
├── pages/                 # Page Object Models
│   ├── CareersPage.js
│   └── ApplyForm.js
│
├── tests/                 # Test specs
│   ├── careersNavigation.spec.js
│   └── applyForm.spec.js
│
├── test-data/              # Static test assets
│   └── resume.txt
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
