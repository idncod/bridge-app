import ThankYou from '../components/ThankYou.vue'

describe('<ThankYou />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ThankYou)
  })
})