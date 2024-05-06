import {Selector} from 'testcafe';

import {getOrigin, standURL, VALID_URL} from "../../utlis";

fixture `navigation`
    .page `${standURL}/footer`;

test('Check Button 1', async t => {
    await t.click(Selector('[data-testid="button-1"]'))

    // @ts-ignore
    const getURL = await t.eval(() => window.location.href);

    await t.expect(getOrigin(getURL) + '/').eql(VALID_URL)
})

test('Check Button 2', async t => {
    await t.click(Selector('[data-testid="button-2"]'))

    // @ts-ignore
    const getURL = await t.eval(() => window.location.href);

    await t.expect(getOrigin(getURL) + '/').eql(VALID_URL)
})

test('Check Link 1', async t => {
    const elem = Selector('[data-testid="link-1"]');

    const target = await elem.getAttribute('target')
    const href = await elem.getAttribute('href')

    await t.expect(href).eql(VALID_URL)
    await t.expect(target).eql('_parent')
})

test('Check Link 2', async t => {
    const elem = Selector('[data-testid="link-2"]');

    const target = await elem.getAttribute('target')
    const href = await elem.getAttribute('href')

    await t.expect(href).eql(VALID_URL)
    await t.expect(target).eql('_blank')
})
