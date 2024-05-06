import {Selector} from 'testcafe';
import {standURL} from "../../utlis";

fixture `navigation`
    .page `${standURL}/modal`;

test('Check content', async t => {
    await t.click(Selector('[data-testid="modal-open"]'))

    await t.expect(Selector('[data-testid="modal-body"]').innerText).contains('Woohoo, you are reading this text in a modal!');
    await t.expect(Selector('[data-testid="modal-title"]').innerText).contains('Modal heading');
})

// test('Open button unreachable after modal open', async t => {
//     await t.click(Selector('[data-testid="modal-open"]'))
//     await t.click(Selector('[data-testid="modal-open"]'))
// })

