<template>
  <li :class="active ? 'active' : ''">
    <router-link :to="path">{{text}}</router-link>
  </li>
</template>

<script>
export default {
  props: ['path', 'text'],
  created () {
  },
  computed: {
    active() {
      return this.$route.path == this.$props.path;
    }
  }
}
</script>

<style lang="scss">
</style>
