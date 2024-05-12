import {standURL} from "../../utils";

describe('modal', () => {
    beforeEach(() => {
        cy.visit(`${standURL}/cart`)
    })

    it('cart is empty', () => {
        cy.getByTestId('cart-page-button').click();

        cy.get('[name="cart-item"]').should('not.exist')
    })

    it('add to cart', () => {
        cy.get('[data-testid="card-1"] button').click();

        cy.getByTestId('cart-page-button').click();
        cy.get('[name="cart-item"]').should('have.length', 1)
    })

    it('some in cart', () => {
        cy.get('[data-testid="card-1"] button').click();
        cy.get('[data-testid="card-2"] button').click();

        cy.getByTestId('cart-page-button').click();

        cy.get('[name="cart-item"]').should('have.length', 2)
        cy.getByTestId('cart-total-number').should('contain', '$150')
    })


})

