import {INVALID_EMAIL, INVALID_PASSWORD, standURL, VALID_EMAIL, VALID_PASSWORD} from "../../../utlis";

describe('form', () => {
    beforeEach(() => {
        cy.visit(`${standURL}/form`)
    })

    it('valid data', () => {
        cy.getByTestId('email-input').type(VALID_EMAIL);
        cy.getByTestId('password-input').type(VALID_PASSWORD);
        cy.getByTestId('submit-button').click()

        cy.getByTestId('submit-text').should("contain", 'Registered!')
    })

    it('invalid data', () => {
        cy.getByTestId('email-input').type(INVALID_EMAIL);
        cy.getByTestId('password-input').type(INVALID_PASSWORD);
        cy.getByTestId('submit-button').click()

        cy.getByTestId('email-error').should("contain", 'Please provide a valid email.')
        cy.getByTestId('password-error').should("contain", 'Password is Invalid')
    })
})
