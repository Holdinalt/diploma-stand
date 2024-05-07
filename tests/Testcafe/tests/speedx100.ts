import {SPEED_ANS, SPEED_URL} from "../../utlis";

import {Selector} from 'testcafe';

fixture `speed`
    .page `${SPEED_URL}`;

for (let i = 0; i < 100; i++) {

    test(`Check Hello World Number ${i}`, async t => {
        await t.click(Selector('#button'))

        await t.expect(Selector('#answer').innerText).contains(SPEED_ANS);
    })
}
