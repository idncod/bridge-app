import Question3 from '../components/Question3.vue'

describe('<Question3 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Question3)
  })
})