import {SPEED_ANS} from "../../../utils.mjs";

describe('speed', () => {

    for (let i = 0; i < 10; i++) {
        it(`Check Hello World Number ${i}`, () => {
            cy.visit('../hello_world.html')

            cy.get('#button').click()

            cy.get('#answer').should("contain.text", SPEED_ANS)
        })
    }
})
