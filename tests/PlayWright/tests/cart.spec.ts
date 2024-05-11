import {expect, test} from "@playwright/experimental-ct-react";

test.beforeEach(async ({ page }) => {
    await page.goto(`/cart`);
})

test('cart is empty', async ({ page }) => {
    await page.getByTestId('cart-page-button').click();
    const cartList = page.getByTestId('cart-list');
    const cards = cartList.locator('[name="cart-item"]')

    await expect(cards).toHaveCount(0)
});

test('add to cart', async ({ page }) => {
    const card1 = page.getByTestId('card-1')
    await card1.getByRole("button").click()

    await page.getByTestId('cart-page-button').click();
    const cartList = page.getByTestId('cart-list');
    const cards = cartList.locator('[name="cart-item"]')

    await expect(cards).toHaveCount(1)
});

test('some in cart', async ({ page }) => {
    await page.getByTestId('card-1').getByRole("button").click()
    await page.getByTestId('card-2').getByRole("button").click()

    await page.getByTestId('cart-page-button').click();
    const cartList = page.getByTestId('cart-list');
    const cards = cartList.locator('[name="cart-item"]')

    await expect(cards).toHaveCount(2)
    await expect(page.getByTestId('cart-total-number')).toHaveText('$150')
});

test('card screen check', async ({ page }) => {
    await expect(page.getByTestId('card-1')).toHaveScreenshot();
});

test('cart screen check', async ({ page }) => {
    await page.getByTestId('card-1').getByRole("button").click()

    await page.getByTestId('cart-page-button').click();

    await expect(page.getByTestId('cart-list')).toHaveScreenshot();
});
