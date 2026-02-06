
const { test: base, expect } = require("@playwright/test");
const RegistrationPage = require("../pages/RegistrationPage.js");
const StoreHomePage = require("../pages/StoreHomePage.js");
const LoginPage = require("../pages/LoginPage.js");

const test = base.extend({
    registerPage: async ({ page}, use) => {
    const home = new StoreHomePage(page);
    const login = new LoginPage(page);
    const register = new RegistrationPage(page);

    //navigate using user flow:
    await home.goto('/');
    await page.waitForLoadState('networkidle');
    await home.clickLoginAvatar();

    //navigate to registration page
    //wait for UI indication that create account link is visble
    await expect(login.createAccountLink).toBeVisible();

    await login.clickCreateAccountLink();

    //verify on register page
    await expect(page).toHaveURL(/register/i);
    await use(register);
    },
});

module.exports = { test, expect };
