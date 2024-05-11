import {expect, test} from "@playwright/experimental-ct-react";
import {INVALID_EMAIL, INVALID_PASSWORD, VALID_EMAIL, VALID_PASSWORD} from "../../utlis";

test.beforeEach(async ({ page }) => {
    await page.goto(`/diploma-stand/form`);
})

test('valid data', async ({ page }) => {
    const emailInput = page.getByTestId('email-input');
    const passwordInput = page.getByTestId('password-input');
    const submitFormButton = page.getByTestId('submit-button');

    await emailInput.fill(VALID_EMAIL)
    await passwordInput.fill(VALID_PASSWORD)
    await submitFormButton.click()

    await expect(page.getByTestId('submit-text')).toHaveText('Registered!')
});

test('invalid data', async ({ page }) => {
    const emailInput = page.getByTestId('email-input');
    const passwordInput = page.getByTestId('password-input');
    const submitFormButton = page.getByTestId('submit-button');

    await emailInput.fill(INVALID_EMAIL)
    await passwordInput.fill(INVALID_PASSWORD)
    await submitFormButton.click()

    await expect(page.getByTestId('email-error')).toHaveText('Please provide a valid email.')
    await expect(page.getByTestId('password-error')).toHaveText('Password is Invalid')
});

test('invalid data screen', async ({ page }) => {
    const emailInput = page.getByTestId('email-input');
    const passwordInput = page.getByTestId('password-input');
    const submitFormButton = page.getByTestId('submit-button');

    await emailInput.fill(INVALID_EMAIL)
    await passwordInput.fill(INVALID_PASSWORD)
    await submitFormButton.click()

    await expect(page.getByTestId('email')).toHaveScreenshot()
    await expect(page.getByTestId('password')).toHaveScreenshot()
});
