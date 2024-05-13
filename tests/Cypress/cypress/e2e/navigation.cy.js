import {standURL, VALID_URL} from "../../../utlis";

describe('navigation', () => {
    beforeEach(() => {
        cy.visit(`${standURL}/footer`)
    })

    it('Check Button 1', () => {
        cy.getByTestId('button-1').click()

        cy.url().should('include', VALID_URL)
    })


    it('Check Link 1', () => {
        cy.getByTestId('link-1').should('have.attr', 'href').and('include', VALID_URL)
        cy.getByTestId('link-1').should('have.attr', 'target').and('include', '_parent')
    })

    it('Check Link 2', () => {
        cy.getByTestId('link-2').should('have.attr', 'href').and('include', VALID_URL)
        cy.getByTestId('link-2').should('have.attr', 'target').and('include', '_blank')
    })

})
