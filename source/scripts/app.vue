<template>
  <div id="root">
    <ul id="main-menu" class="nav nav-pills nav-stacked">
      <bootstrap-link :key="link.path" v-for="link in links" :text="link.text" :path="link.path"></bootstrap-link>
    </ul>
    <div id="partial-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import BootstrapLink from "./components/common/bootstrap-link.vue"

export default {
  name: 'app',
  created: () => {
    
  },
  data: () => {
    return {
      links: [
        {path: "/", text: "Dashboard"},
        {path: "/conditional-rules", text: "Conditional rules"},
        {path: "/formatting-rules", text: "Formatting rules"},
        {path: "/multiple-fields", text: "Multiple fields"},
        {path: "/about", text: "About"}
      ]
    };
  },
  methods: {
  },
  components: {
    BootstrapLink
  }
}
</script>

<style lang="scss">
</style>
