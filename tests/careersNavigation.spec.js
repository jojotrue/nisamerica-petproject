
const { test, expect } = require('@playwright/test');
const CareersPage = require("../pages/CareersPage.js");
const ApplyForm = require("../pages/ApplyForm.js");


test.describe("Careers navigation smoke test", () => {

test("User can navigate to Career page", async ({ page }) => {
    const careers = new CareersPage(page);

    await careers.openCareersPage();

    await expect(careers.careersHeading).toBeVisible();

});

  test("User can navigate to QA application form", async ({ page }) => {
    const careers = new CareersPage(page);
    const apply = new ApplyForm(page);

    await careers.openHome();
    await careers.clickCareersLink();
    await careers.openFirstJob();

    await expect(apply.nameField).toBeVisible();
    await expect(apply.emailField).toBeVisible();
    await expect(apply.subjectField).toBeVisible();
    await expect(apply.messageField).toBeVisible();


  });
  
});