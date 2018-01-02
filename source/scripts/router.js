import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/dashboard.vue'
import ConditionalRules from './components/conditional-rules.vue'
import FormattingRules from './components/formatting-rules.vue'
import MultipleFields from './components/multiple-fields.vue'
import About from './components/about.vue'
import PageNotFound from './components/not-found.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/conditional-rules',
      component: ConditionalRules
    },
    {
      path: '/formatting-rules',
      component: FormattingRules
    },
    {
      path: '/multiple-fields',
      component: MultipleFields
    },
    {
      path: '/about',
      component: About
    },
    { path: "/*", component: PageNotFound }
  ]
})
