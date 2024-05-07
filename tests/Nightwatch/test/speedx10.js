const SPEED_ANS = 'Hello World!'
const SPEED_URL = 'file:///F:/projects/web/diploma-stand/src/static/hello_world.html'

for (let i = 0; i < 10; i++) {
    it(`Check Hello World Number ${i}`, function(browser) {
        browser.navigateTo(SPEED_URL)

        browser
            .waitForElementVisible('#button')
            .click('#button')
            .assert.textEquals('#answer', SPEED_ANS)
    });
}
