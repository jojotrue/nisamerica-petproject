
class LoginPage {
  constructor(page) {
    this.page = page;

    this.email = page.getByRole("textbox", { name: "E-mail" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginAvatar = page.getByRole("link", { name: "Login" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.createAccountLink = page.getByRole("link", {
      name: "Create an account",
    });
  }

  async openLoginPage() {
    await this.page.goto("/account/login");
  }

  async clickCreateAccountLink() {
    await this.createAccountLink.click();
  }

  async waitForLoginForm() {
    await this.email.waitFor({ state: "visible" });
  }

  async fillForm(user) {
    await this.email.fill(user.email);
    await this.password.fill(user.password);
  }

  async submit() {
    await this.loginButton.click();
  }
}
module.exports = LoginPage;
