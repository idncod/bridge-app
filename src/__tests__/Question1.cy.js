import Question1 from '../components/Question1.vue'

describe('<Question1 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Question1)
  })
})