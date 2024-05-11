import {expect, test} from "@playwright/experimental-ct-react";
import {Button} from "react-bootstrap";

test.use({ viewport: { width: 500, height: 500 } });
test('default button', async ({ mount }) => {
    const component = await mount(<Button data-testid={'button'}>Hello</Button>)

    await expect(component).toHaveText('Hello')
    await expect(component).toHaveClass('btn btn-primary')

    await expect(component).toHaveScreenshot('default-button.png');
});

test('info button', async ({ mount }) => {
    const component = await mount(<Button data-testid={'button'} variant="info">Info</Button>)

    await expect(component).toHaveText('Info')
    await expect(component).toHaveClass('btn btn-info')

    await expect(component).toHaveScreenshot('info-button.png');
});
