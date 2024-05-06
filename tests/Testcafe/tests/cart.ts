import {standURL} from "../../utlis";

import {Selector} from 'testcafe';

fixture `form`
    .page `${standURL}/cart`;

test('cart is empty', async t => {
    await t.click(Selector('[data-testid="cart-page-button"]'))

    await t.expect(Selector('[name="cart-item"]').count).eql(0)
})

test('add to cart', async t => {
    await t.click(Selector('[data-testid="card-1"] button'))

    await t.click(Selector('[data-testid="cart-page-button"]'))

    await t.expect(Selector('[name="cart-item"]').count).eql(1)
    await t.expect(Selector('[data-testid="cart-total-number"]').innerText).contains('$100');
})

test('some in cart', async t => {
    await t.click(Selector('[data-testid="card-1"] button'))
    await t.click(Selector('[data-testid="card-2"] button'))

    await t.click(Selector('[data-testid="cart-page-button"]'))

    await t.expect(Selector('[name="cart-item"]').count).eql(2)
    await t.expect(Selector('[data-testid="cart-total-number"]').innerText).contains('$150');
})
