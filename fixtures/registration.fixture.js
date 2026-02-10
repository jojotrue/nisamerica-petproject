
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
    await page.goto('https://store.nisamerica.com/');

    // ADDED: Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // ADDED: Wait for Login link before clicking
    await page.getByRole('link', { name: 'Login' }).waitFor({ state: 'visible' });

    await home.clickLoginAvatar();

    // ADDED: Wait for login page to load
    await page.waitForURL('**/account/login');    

    //wait for UI indication that create account link is visble
    await expect(login.createAccountLink).toBeVisible();

    await login.clickCreateAccountLink();

    //verify on register page
    await expect(page).toHaveURL(/register/i);
    await use(register);
    },
});

module.exports = { test, expect };
