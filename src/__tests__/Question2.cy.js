import Question2 from '../components/Question2.vue'

describe('<Question2 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Question2)
  })
})