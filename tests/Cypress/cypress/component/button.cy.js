import {Button} from "react-bootstrap";

describe('button.cy.js', () => {
  it('default button', () => {
    cy.mount(<Button data-testid={'button'}>Hello</Button>)
    cy.get('button').should('contains.text', 'Hello')
    cy.get('button').should('have.class', 'btn btn-primary')
  })

  it('info button', () => {
    cy.mount(<Button data-testid={'button'} variant="info">Info</Button>)
    cy.get('button').should('contains.text', 'Info')
    cy.get('button').should('have.class', 'btn btn-info')
  })
})
