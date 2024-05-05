const standURL = 'http://localhost:3000'

describe('footer', function() {

    beforeEach(browser => browser.navigateTo(`${standURL}/modal`));

    it('Check content', function(browser) {
        browser
            .waitForElementVisible('[data-testid="modal-open"]')
            .click('[data-testid="modal-open"]')
            .waitForElementVisible('[data-testid="modal"]')
            .assert.textEquals('[data-testid="modal-body"]', 'Woohoo, you are reading this text in a modal!')
            .assert.textEquals('[data-testid="modal-title"]', 'Modal heading')
    });

    it('Open button unreachable after modal open', function(browser) {
        browser
            .waitForElementVisible('[data-testid="modal-open"]')
            .click('[data-testid="modal-open"]')
            .waitForElementVisible('[data-testid="modal"]')
            .click('[data-testid="modal-open"]')
    });

    it('check modal by Screenshot', function(browser) {
        browser
            .waitForElementVisible('[data-testid="modal-open"]')
            .click('[data-testid="modal-open"]')
            .waitForElementVisible('[data-testid="modal"]')
            .pause(1000)
            .assert.screenshotIdenticalToBaseline('[data-testid="modal"]', 'modal')
            .end()
    });

    it('check modal by Screenshot with flex negative', function(browser) {
        browser.navigateTo(`${standURL}/modal?flex=true`)

        browser
            .waitForElementVisible('[data-testid="modal-open"]')
            .click('[data-testid="modal-open"]')
            .waitForElementVisible('[data-testid="modal"]')
            .pause(1000)
            .assert.screenshotIdenticalToBaseline('[data-testid="modal"]', 'modal-flex')
            .end()
    });

});
