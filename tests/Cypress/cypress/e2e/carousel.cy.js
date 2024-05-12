import {standURL} from "../../utils.mjs";

describe('modal', () => {
    beforeEach(() => {
        cy.visit(`${standURL}/carousel`)
    })

    it('carousel check', () => {
        cy.getByTestId('carousel-item-1').should('be.visible');

        cy.get('.carousel-control-next').click();
        cy.wait(1000);
        cy.getByTestId('carousel-item-2').should('be.visible');

        cy.get('.carousel-control-next').click();
        cy.wait(1000);
        cy.getByTestId('carousel-item-3').should('be.visible');
    })
})
