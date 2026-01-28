QA Assessment: E-Commerce Checkout Flow
Author: Leah Njuguna
Date: 28th January, 2026

1. Project Overview
This is a comprehensive test suite for a simple e-commerce flow, including User Login, Order Creation, Payment Processing, and Receipt Generation. The project is organized to demonstrate test strategy, manual test design, and automated testing capabilities.

2. Directory Structure
Based on the assessment requirements, the project is organized as follows:

/test-plan
  - test-strategy.txt (Risk-based strategy and automation priority)
  - test-cases.xlsx   (15 detailed test cases: Postive, Negative, Edge, API, Data)

/automation
  - /ui/checkout_spec.js  (Cypress E2E test covering the UI flow)
  - /api/order_spec.js    (Cypress API test covering POST requests)

/triage
  - debug-explanation.txt (Investigation steps for CI vs Local failures)

/reports
  -The /reports directory is structured to store automated test execution results, including screenshots of failures and HTML summary reports for stakeholder review

3. Technology Stack
- Documentation: Microsoft Excel & Notepad (Markdown compatible)
- Automation Framework: Cypress 13.x
- Environment: Node.js

4. How to Run the Automated Tests
To execute the tests included in the /automation folder, please follow these steps:

Prerequisites
- Ensure Node.js (LTS version) is installed on your machine.

Installation
1. Open your terminal or command prompt.
2. Navigate to the project root folder.
3. Install Cypress by running:
   npm install cypress --save-dev

Execution
- To run tests in Headless Mode (Command Line):
  npx cypress run

- To open the Cypress Test Runner (Interactive Mode):
  npx cypress open

5. Automation Reasoning & Best Practices
- Mocking: Since a live environment was not provided, I used cy.intercept() to mock API responses. This ensures the test logic is verified without external dependencies.
- No Hard Sleeps: I avoided using cy.wait(number) to prevent flaky tests, opting for Cypress's built-in automatic waiting and assertions.
- Maintainability: Selectors are kept clean to ensure the tests are easy to update if the UI changes.