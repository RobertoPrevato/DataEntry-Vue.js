// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import I from 'ilocale'
import setupLocale from './locale/setup'
import setupDataEntry from './components/common/validation/setup-dataentry'
// setup locale

setupLocale();
setupDataEntry();

Vue.mixin({
  methods: {
    t: (key, o) => I.t(key, o)
  }
})

import App from './app.vue'
import router from './router'

new Vue({
  el: '#root',
  router,
  template: '<App/>',
  components: { App }
})