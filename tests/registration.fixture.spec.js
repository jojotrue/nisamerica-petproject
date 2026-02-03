
const { test, expect } = require("../fixtures/registration.fixture.js");
const { fakeUser } = require("../utils/userData.js");

test.describe("Registration test (fixture)", () => {
  test("Verify valid user data fills correctly (no submit)", async ({
    registerPage, page
  }) => {
    const user = fakeUser();

    //fill form only to avoid CAPTCHA
    await registerPage.fillForm(user, { fillName: true });

    //verify data input
    await expect(registerPage.email).toHaveValue(user.email);
  });

  test("Verify missing password keeps user on register page", async ({
    registerPage,
  }) => {
    const user = fakeUser({ password: "" });

    await registerPage.fillForm(user, { fillName: true });

    await expect(registerPage.page).toHaveURL(/register/i);
  });

  test("Verify missing password prevents submission", async ({
    registerPage, page
  }) => {
    const user = fakeUser({ password: "" });

    let requestSent = false;

    //abort network request
    await page.route("**/account**", (route) => {
      requestSent = true;
      route.abort();
    });

    await registerPage.fillForm(user, { fillName: true });
    await registerPage.submit();

    expect(requestSent).toBeFalsy(); // assert form not submitted
  });
});
