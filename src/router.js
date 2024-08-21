import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Question1 from './components/Question1.vue';
import Question2 from './components/Question2.vue';
import Question3 from './components/Question3.vue';
import Dashboard from './components/Dashboard.vue';
import ThankYou from './components/ThankYou.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/question1', component: Question1 },
  { path: '/question2', component: Question2 },
  { path: '/question3', component: Question3 },
  { path: '/dashboard', component: Dashboard },
  { path: '/thank-you', component: ThankYou }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
