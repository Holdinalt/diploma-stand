import {expect, test} from "@playwright/experimental-ct-react";
import * as path from "path";

test.beforeEach(async ({ page }) => {
    await page.goto(`/diploma-stand/modal`);
})

test('Check content', async ({ page }) => {
    const buttonModalOpen = page.getByTestId('modal-open');
    await buttonModalOpen.click();

    const modal = page.getByTestId('modal')
    const modalContent = modal.getByTestId('modal-body')
    const modalTitle = modal.getByTestId('modal-title')

    await expect(modalContent).toHaveText('Woohoo, you are reading this text in a modal!')
    await expect(modalTitle).toHaveText('Modal heading')
});

// test('Open button unreachable after modal open', async ({ page }) => {
//     const buttonModalOpen = page.getByTestId('modal-open');
//     await buttonModalOpen.click();
//
//     await buttonModalOpen.click();
// });

test('check modal by Screenshot', async ({ page }) => {
    const buttonModalOpen = page.getByTestId('modal-open');
    await buttonModalOpen.click();

    const modal = page.getByTestId('modal')
    await expect(modal).toHaveScreenshot();
});

test('check modal by Screenshot with flex negative', async ({ page }) => {
    await page.goto(`/diploma-stand/modal?flex=true`);
    const buttonModalOpen = page.getByTestId('modal-open');
    await buttonModalOpen.click();

    const modal = page.getByTestId('modal')
    // await expect(modal).toHaveScreenshot('modal-flex-content.png');
    await expect(modal).toHaveScreenshot('modal-flex-content.png', {maxDiffPixels: 20, stylePath: path.join(__dirname, './utils/modal.css')});
});
