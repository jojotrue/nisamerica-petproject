
const { faker } = require("@faker-js/faker");
const { test, expect } = require("@playwright/test");
const path = require("path");

const CareersPage = require("../pages/CareersPage.js");
const ApplyForm = require("../pages/ApplyForm.js");

test.describe("Apply Form smoke test", () => {
  test("User can fill out Apply form with valid data", async ({ page }) => {
    const careers = new CareersPage(page);
    const apply = new ApplyForm(page);
    const filePath = path.resolve(__dirname, "../test-data/resume.txt");

    const formData = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      subject: "QA Automation Engineer",
      message: faker.lorem.paragraph(),
    };

    await careers.openHome();
    await careers.clickCareersLink();
    await careers.openFirstJob();

    await apply.fillName(formData.name);
    await apply.fillEmail(formData.email);
    await apply.fillSubject(formData.subject);
    await apply.fillMessage(formData.message);
    await apply.chooseFile(filePath);

    await expect(apply.nameField).toHaveValue(formData.name);
    await expect(apply.emailField).toHaveValue(formData.email);
    await expect(apply.subjectField).toHaveValue(formData.subject);
    await expect(apply.messageField).toHaveValue(formData.message);
    await expect(apply.fileUpload).toHaveValue(/resume\.txt/);
  });

  test("Verify invalid email does not submit form", async ({ page }) => {
    const careers = new CareersPage(page);
    const apply = new ApplyForm(page);

    //blocks submit form from server at test-level
    await apply.blockFormSubmission();

    await careers.openHome();
    await careers.clickCareersLink();
    await careers.openFirstJob();

    await apply.fillName(faker.person.fullName());
    await apply.fillEmail("invalid-email");
    await apply.fillSubject("QA Engineer");
    await apply.fillMessage("Test Message");
    await apply.clickSubmitButton();

    //negative validation verified by asserting form remains visible, submission does not occur
    await expect(apply.submitButton).toBeVisible();
    await expect(apply.emailField).toHaveValue("invalid-email");
  });
});
