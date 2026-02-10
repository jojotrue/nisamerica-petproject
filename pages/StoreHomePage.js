
class StoreHomePage {
  constructor(page) {
    this.page = page;

    this.loginAvatar = page.getByRole("link", { name: "Login" });
  }

  async goto() {
    await this.page.goto('https://store.nisamerica.com/');
  }

  async clickLoginAvatar() {
  await this.loginAvatar.waitFor({ state: 'visible' });
  await this.loginAvatar.click();
}
  }
}

module.exports = StoreHomePage;
