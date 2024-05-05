const standURL = 'http://localhost:3000'

const VALID_URL = 'https://playwright.dev/'

describe('footer', function() {

    beforeEach(browser => browser.navigateTo(`${standURL}/footer`));

    it('Check Button 1', function(browser) {
        browser
            .waitForElementVisible('[data-testid="button-1"]')
            .click('[data-testid="button-1"]')
            .assert.urlContains(VALID_URL);
    });

    it('Check Button 2', async function (browser) {
        browser
            .waitForElementVisible('[data-testid="button-2"]')
            .click('[data-testid="button-2"]')

        const allWindows = await browser.window.getAllHandles();
        await browser.window.switchTo(allWindows[1]);

        browser.assert.urlContains(VALID_URL);
    });
    it('Check Link 1', async function (browser) {
        browser
            .waitForElementVisible('[data-testid="link-1"]')
            .assert.attributeContains('[data-testid="link-1"]', 'href', VALID_URL)
            .assert.attributeContains('[data-testid="link-1"]', 'target', '_parent');
    });
    it('Check Link 2', async function (browser) {
        browser
            .waitForElementVisible('[data-testid="link-2"]')
            .assert.attributeContains('[data-testid="link-2"]', 'href', VALID_URL)
            .assert.attributeContains('[data-testid="link-2"]', 'target', '_blank');
    });
});
