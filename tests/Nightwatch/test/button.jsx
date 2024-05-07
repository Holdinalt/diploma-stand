import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default {
    title: 'Form Component',
    component: Button
}

export const ButtonDefault = Object.assign(() => <Button>Hello</Button>, {
    test: async (browser, {component, result}) => {
        console.log('ButtonDefault', result)

        await expect(component).to.have.attribute('class').equal('btn btn-primary')
        await expect(component).to.have.text.equal('Hello')

        browser.assert.screenshotIdenticalToBaseline(component, 'ButtonDefault')
    }
});

export const ButtonInfo = Object.assign(() => <Button variant="info">Info</Button>, {
    test: async (browser, {component, result}) => {
        console.log('ButtonDefault', result)

        await expect(component).to.have.attribute('class').equal('btn btn-info')
        await expect(component).to.have.text.equal('Info')

        browser.assert.screenshotIdenticalToBaseline(component, 'ButtonInfo')
    }
});
