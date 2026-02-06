

const { test, expect } = require("../fixtures/login.fixture.js");
const { fakeUser } = require("../utils/userData.js");

//  * Login page UI validation tests.
//  * CAPTCHA-protected flow — no form submission or authentication performed.
test.describe("Login page client-side validation )", () => {
  test("Verify fills email and password feilds with valid data", async ({
    loginPage, page
  }) => {
    const user = fakeUser();

    //fill form only to avoid CAPTCHA
    await loginPage.fillForm(user, { fillEmail: true });
    await expect(loginPage.email).toHaveValue(user.email);
    await loginPage.fillForm(user, { fillPassword: true });
    await expect(loginPage.password).toHaveValue(user.password);
  });

  test("Verify missing password keeps user on login page", async ({
    loginPage,
  }) => {
    const user = fakeUser({ password: "" });

    await loginPage.fillForm(user, { fillPassword: true });

    await expect(loginPage.page).toHaveURL(/login/i);
  });

  test("Verify form does not submit when required fields are missing", async ({
    loginPage, page
  }) => {
    const user = fakeUser({ password: "" });

    let requestSent = false;

    //abort network request
    await page.route("**/account**", (route) => {
      requestSent = true;
      route.abort();
    });

    await loginPage.fillForm(user, { fillPassword: true });
    await loginPage.submit();

    expect(requestSent).toBeFalsy(); // assert form not submitted
  });
});
