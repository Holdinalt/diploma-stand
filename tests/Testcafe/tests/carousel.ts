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
