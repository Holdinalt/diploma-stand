import {expect, test} from "@playwright/experimental-ct-react";
import {getOrigin, standURL, VALID_URL} from "../../utlis";

test.beforeEach(async ({ page }) => {
    await page.goto(`${standURL}/footer`);
})
test('Check Button 1', async ({ page }) => {
    const button = page.getByTestId('button-1');
    await button.click();

    expect(getOrigin(page.url())).toEqual(VALID_URL.slice(0, -1))
});

test('Check Button 2', async ({ page, context }) => {
    const button = page.getByTestId('button-2');

    const pagePromise = context.waitForEvent('page');
    await button.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    expect(getOrigin(newPage.url())).toEqual(VALID_URL.slice(0, -1))
});

test('Check Link 1', async ({ page }) => {
    const link = page.getByTestId('link-1');

    await expect(link).toHaveAttribute('target', '_parent')
    await expect(link).toHaveAttribute('href', VALID_URL)
});

test('Check Link 2', async ({ page }) => {
    const link = page.getByTestId('link-2');

    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('href', VALID_URL)
});
