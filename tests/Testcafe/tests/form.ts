import {INVALID_EMAIL, INVALID_PASSWORD, standURL, VALID_EMAIL, VALID_PASSWORD} from "../../utlis";

import {Selector} from 'testcafe';

fixture `form`
    .page `${standURL}/form`;

test('valid data', async t => {
    await t.typeText(Selector('[data-testid="email-input"]'), VALID_EMAIL)
    await t.typeText(Selector('[data-testid="password-input"]'), VALID_PASSWORD)

    await t.click(Selector('[data-testid="submit-button"]'))

    await t.expect(Selector('[data-testid="submit-text"]').innerText).contains('Registered!');
})

test('invalid data', async t => {
    await t.typeText(Selector('[data-testid="email-input"]'), INVALID_EMAIL)
    await t.typeText(Selector('[data-testid="password-input"]'), INVALID_PASSWORD)

    await t.click(Selector('[data-testid="submit-button"]'))

    await t.expect(Selector('[data-testid="email-error"]').innerText).contains('Please provide a valid email.');
    await t.expect(Selector('[data-testid="password-error"]').innerText).contains('Password is Invalid');
})
