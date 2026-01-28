
class CareersPage {
    constructor(page) {
        this.page = page;
        this.careersLink = page.getByRole('link', { name : /careers/i });
        this.jobsLink = page.getByRole('link', { name: /quality assurance/i });
        this.careersHeading = page.getByRole( 'heading', {name: /careers/i});
    }
        
    async openHome() {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }

    async openCareersPage() {
        await this.page.goto('/careers', { waitUntil: 'domcontentloaded'});
    }

    async clickCareersLink() {
        await this.careersLink.click();
    }

    async openFirstJob() {
        await this.jobsLink.first().click();
    }

};


module.exports =  CareersPage;

