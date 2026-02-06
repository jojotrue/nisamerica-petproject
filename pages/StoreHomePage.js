
class StoreHomePage {
  constructor(page) {
    this.page = page;

    this.loginAvatar = page.getByRole("link", { name: "Login" });
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickLoginAvatar() {
    await this.loginAvatar.click();
  }
}

module.exports = StoreHomePage;
