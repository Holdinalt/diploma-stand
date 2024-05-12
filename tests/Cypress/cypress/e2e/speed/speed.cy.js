import {SPEED_ANS} from "../../../../utlis";

describe('speed', () => {

    it('Check Button 1', () => {
        cy.visit('../hello_world.html')

        cy.get('#button').click()

        cy.get('#answer').should("contain.text", SPEED_ANS)
    })


})
