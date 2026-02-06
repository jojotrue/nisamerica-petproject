
class RegistrationPage {
   
        constructor(page) {
        
        this.page = page;
        this.firstName = page.getByRole('textbox', { name: 'First name' });
        this.lastName = page.getByRole('textbox', { name: 'Last name' });
        this.email= page.getByRole('textbox', { name: 'E-mail' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        
        this.loginAvatar = page.getByRole('link', { name: 'Login' });
        this.createAccountButton = page.getByRole('button', { name: 'Create account' });

    }

async openLoginPage() {
    await this.page.goto('/account/login');

}

async submit() {
    await this.createAccountButton.click();
}

async fillForm(user, { fillName = true } = {}) {
    if (fillName) {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
    }
        await this.email.fill(user.email);
        await this.password.fill(user.password);
}


}


module.exports = RegistrationPage;
