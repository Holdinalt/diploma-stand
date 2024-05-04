import {expect, test} from "@playwright/test";
import {standURL} from "../../utlis";

test.beforeEach(async ({ page }) => {
    await page.goto(`${standURL}/carousel`);
})

test('carousel check', async ({ page }) => {
    const nextItem = page.locator('[class="carousel-control-next-icon"]')

    await expect(page.getByTestId('carousel-item-1')).toBeVisible()
    await nextItem.click()

    await page.waitForTimeout(1000);
    await expect(page.getByTestId('carousel-item-2')).toBeVisible()
    await nextItem.click()

    await page.waitForTimeout(1000);
    await expect(page.getByTestId('carousel-item-3')).toBeVisible()
});
