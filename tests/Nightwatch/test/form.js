const standURL = 'http://localhost:3000'

const VALID_EMAIL = 'email@mail.ru'
const INVALID_EMAIL = 'email'
const VALID_PASSWORD = '123qwery'
const INVALID_PASSWORD = '123'
describe('form', function() {

    beforeEach(browser => browser.navigateTo(`${standURL}/form`));

    it('valid data', function(browser) {

        browser.element('[data-testid="email-input"]').sendKeys(VALID_EMAIL)
        browser.element('[data-testid="password-input"]').sendKeys(VALID_PASSWORD)
        browser.click('[data-testid="submit-button"]')

        browser.assert.textEquals('[data-testid="submit-text"]', 'Registered!')
    });

    it('invalid data', function(browser) {

        browser.element('[data-testid="email-input"]').sendKeys(INVALID_EMAIL)
        browser.element('[data-testid="password-input"]').sendKeys(INVALID_PASSWORD)
        browser.click('[data-testid="submit-button"]')

        browser.assert.textEquals('[data-testid="email-error"]', 'Please provide a valid email.')
        browser.assert.textEquals('[data-testid="password-error"]', 'Password is Invalid')
    });

    it('invalid data screen', function(browser) {

        browser.element('[data-testid="email-input"]').sendKeys(INVALID_EMAIL)
        browser.element('[data-testid="password-input"]').sendKeys(INVALID_PASSWORD)
        browser.click('[data-testid="submit-button"]')

        browser
            .assert.screenshotIdenticalToBaseline('[data-testid="email"]', 'email-error')
            .assert.screenshotIdenticalToBaseline('[data-testid="password"]', 'password-error')
    });
});
