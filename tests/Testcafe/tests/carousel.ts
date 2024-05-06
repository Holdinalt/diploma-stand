import {standURL} from "../../utlis";

import {Selector} from 'testcafe';

fixture `form`
    .page `${standURL}/carousel`;

test('cart is empty', async t => {

    const nextItem = Selector('[class="carousel-control-next-icon"]')

    await t.expect(await Selector('[data-testid="carousel-item-1"]').visible).ok()

    // await t.wait(1000)
    await t.click(nextItem)
    await t.expect(await Selector('[data-testid="carousel-item-2"]').visible).ok()

    await t.click(nextItem)
    await t.expect(await Selector('[data-testid="carousel-item-3"]').visible).ok()
})

// test.beforeEach(async ({ page }) => {
//     await page.goto(`${standURL}/carousel`);
// })
//
// test('carousel check', async ({ page }) => {
//     const nextItem = page.locator('[class="carousel-control-next-icon"]')
//
//     await expect(page.getByTestId('carousel-item-1')).toBeVisible()
//     await nextItem.click()
//
//     await page.waitForTimeout(1000);
//     await expect(page.getByTestId('carousel-item-2')).toBeVisible()
//     await nextItem.click()
//
//     await page.waitForTimeout(1000);
//     await expect(page.getByTestId('carousel-item-3')).toBeVisible()
// });
