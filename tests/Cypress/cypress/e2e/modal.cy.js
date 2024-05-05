import {standURL} from "../../../utlis";

describe('modal', () => {
    beforeEach(() => {
        cy.visit(`${standURL}/modal`)
    })

    it('Check content', () => {
        cy.getByTestId('modal-open').click();

        cy.getByTestId('modal-body').should("contain", 'Woohoo, you are reading this text in a modal!')
        cy.getByTestId('modal-title').should("contain", 'Modal heading')
    })

    it('Open button unreachable after modal open', () => {
        cy.getByTestId('modal-open').click();

        cy.getByTestId('modal-open').click();
    })
})
