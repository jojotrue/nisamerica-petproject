
class ApplyForm {
    constructor(page) {
        this.page = page;
        this.nameField = page.getByRole('textbox', { name: 'Name' });
        this.emailField = page.getByRole('textbox', { name: 'Email', exact: true });
        this.subjectField = page.getByRole('textbox', { name: 'Subject' });
        this.messageField = page.getByRole('textbox', { name: 'Message' });
        this.fileUpload = page.locator('input[type="file"]');
        this.emailError = page.getByText(/invalid-email/i);
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

async openApplyForm() {
    await this.page.goto('/careers/quality-assurance-game-tester-eng');
}

async fillName(name) {
    await this.nameField.fill(name);
}

async fillEmail(email) {
    await this.emailField.fill(email);
} 

async fillSubject(subject) {
    await this.subjectField.fill(subject);
}

async fillMessage(message) {
    await this.messageField.fill(message);
}

async triggerEmailValidation() {
    await this.emailField.blur();
}

async chooseFile(filePath) {
    await this.fileUpload.setInputFiles(filePath);
}

async blockFormSubmission() {
    await this.page.route('**/admin-ajax.php', route => route.abort());
}

async clickSubmitButton() {
    await this.submitButton.click();
}

}

module.exports = ApplyForm;
