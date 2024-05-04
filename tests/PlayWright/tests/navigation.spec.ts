import {expect, test} from "@playwright/test";
import {getOrigin, standURL} from "../../utlis";

const VALID_URL = 'https://ya.ru'

test.beforeEach(async ({ page }) => {
    await page.goto(`${standURL}/footer`);
})
test('Check Button 1', async ({ page }) => {
    const button = page.getByTestId('button-1');
    await button.click();

    expect(getOrigin(page.url())).toEqual(VALID_URL)
});

test('Check Button 2', async ({ page, context }) => {
    const button = page.getByTestId('button-2');

    const pagePromise = context.waitForEvent('page');
    await button.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    expect(getOrigin(newPage.url())).toEqual(VALID_URL)
});

test('Check Link 1', async ({ page }) => {
    const link = page.getByTestId('link-1');

    await expect(link).toHaveAttribute('target', '_parent')
});

test('Check Link 2', async ({ page }) => {
    const link = page.getByTestId('link-2');

    await expect(link).toHaveAttribute('target', '_blank')
});
