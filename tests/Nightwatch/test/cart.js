const standURL = 'http://localhost:3000'

describe('cart', function() {

    beforeEach(browser => browser.navigateTo(`${standURL}/cart`));

    it('Check content', async function (browser) {
        browser.click('[data-testid="cart-page-button"]');
        expect.element('[name="cart-item"]').to.not.be.present;
    });

    it('add to cart', async function (browser) {
        browser
            .click('[data-testid="card-1"] button')
            .click('[data-testid="cart-page-button"]');

        browser.expect(browser.element.findAll('[name="cart-item"]').count()).to.equal(1);
    });

    it('some in cart', async function (browser) {
        browser
            .click('[data-testid="card-1"] button')
            .click('[data-testid="card-2"] button')
            .click('[data-testid="cart-page-button"]');



        browser.expect(browser.element.findAll('[name="cart-item"]').count()).to.equal(2)
        browser.assert.textEquals('[data-testid="cart-total-number"]', '$150');
    });

    it('card screen check', async function (browser) {
        browser.assert.screenshotIdenticalToBaseline('[data-testid="card-1"]', 'card 1')
    });

    it('cart screen check', async function (browser) {
        browser
            .click('[data-testid="card-1"] button')
            .click('[data-testid="cart-page-button"]');

        browser.assert.screenshotIdenticalToBaseline('[data-testid="cart-list"]', 'cart-list')
    });
});
