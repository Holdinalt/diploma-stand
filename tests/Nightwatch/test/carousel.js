const standURL = 'http://localhost:3000'

describe('carousel', function() {

    beforeEach(browser => browser.navigateTo(`${standURL}/carousel`));

    it('carousel check', function(browser) {

        browser
            .assert.visible('[data-testid="carousel-item-1"]')
            .click('[class="carousel-control-next-icon"]')
            .pause(1000)
            .assert.visible('[data-testid="carousel-item-2"]')
            .click('[class="carousel-control-next-icon"]')
            .pause(1000)
            .assert.visible('[data-testid="carousel-item-3"]')
    });

    it('screen carousel check', function(browser) {
        browser
            .assert.screenshotIdenticalToBaseline('[data-testid="carousel-item-1"]', 'carousel-item-1')
            .click('[class="carousel-control-next-icon"]')
            .pause(1000)
            .assert.screenshotIdenticalToBaseline('[data-testid="carousel-item-2"]', 'carousel-item-2')
            .click('[class="carousel-control-next-icon"]')
            .pause(1000)
            .assert.screenshotIdenticalToBaseline('[data-testid="carousel-item-3"]', 'carousel-item-3')
    });
});
