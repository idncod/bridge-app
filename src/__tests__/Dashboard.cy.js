import Dashboard from '../components/Dashboard.vue'

describe('<Dashboard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Dashboard)
  })
})