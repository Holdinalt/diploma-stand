import {expect, test} from "@playwright/experimental-ct-react";
import {SPEED_ANS} from "../../../utlis";

for (let i = 0; i < 100; i++) {
    test(`Check Hello World Number ${i}`, async ({ page }) => {
        await page.goto(`file:///F:/projects/web/diploma-stand/src/static/hello_world.html`);

        await page.locator('#button').click()

        const answer = await page.locator('#answer').textContent()

        expect(answer).toEqual(SPEED_ANS)
    });
}
