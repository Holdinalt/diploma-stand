import {standURL, VALID_URL} from "../../../utlis";

describe('navigation', () => {
    beforeEach(() => {
        cy.visit(`${standURL}/footer`)
    })

    it('Check Button 1', () => {
        cy.getByTestId('button-1').click()

        // cy.url().then(urlString => {
        //     expect(urlString).include(VALID_URL)
        // })

        // cy.location('pathname', {timeout: 10000}).should('include', VALID_URL)

        // cy.location().should(location => {
        //     location.origin.startsWith(VALID_URL)
        // })

        // expect(cy.).to.eq(VALID_URL)

        cy.url().should('include', VALID_URL)
    })

    // it('Check Button 2', () => {
    //     cy.getByTestId('button-2').click()
    //
    //     cy.url().should('include', VALID_URL)
    // })

    it('Check Link 1', () => {
        cy.getByTestId('link-1').should('have.attr', 'href').and('include', VALID_URL)
        cy.getByTestId('link-1').should('have.attr', 'target').and('include', '_parent')
    })

    it('Check Link 2', () => {
        cy.getByTestId('link-2').should('have.attr', 'href').and('include', VALID_URL)
        cy.getByTestId('link-2').should('have.attr', 'target').and('include', '_blank')
    })

})
