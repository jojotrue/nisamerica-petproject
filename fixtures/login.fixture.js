
const { test: base, expect } = require("@playwright/test");
const StoreHomePage = require("../pages/StoreHomePage.js");
const LoginPage = require("../pages/LoginPage.js");

const test = base.extend({
  loginPage: async ({ page }, use) => {
    const home = new StoreHomePage(page);
    const login = new LoginPage(page);

    //navigate using user flow:
    await home.goto(`${process.env.BASE_URL}/account`);
    await home.clickLoginAvatar();

    await expect(page).toHaveURL(/login/i);
    await login.waitForLoginForm();

    //verify on login page
    await use(login);
  },
});

module.exports = { test, expect };
