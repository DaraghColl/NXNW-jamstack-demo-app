<template>
  <header class="header">
    <strong class="logo">
      <g-link class="nav-item" to="/">JAMSTACK</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav-item" to="/#store">STORE</g-link>
      <g-link class="nav-item" to="/blog">BLOG</g-link>
      <g-link class="nav-item" to="/contact">CONTACT</g-link>
      <span class="nav-item" v-on:click="toggleCart(!cartStatus)"
        >🛒 <span>{{ items.length }}</span></span
      >
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['cartStatus', 'items']),
  methods: {
    ...mapActions(['toggleCart']),
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav-item {
  text-decoration: none;
  border-bottom: 4px solid transparent;
  font-weight: bold;
  color: #000;
  margin-left: 20px;
  transition: 0.5s;

  &:hover {
    border-bottom: 4px solid $primary;
    transition: 0.5s;
    cursor: pointer;
  }
}

.nav {
  display: flex;
  align-items: center;
  @media (max-width: $screen-sm) {
    width: 100%;
    justify-content: space-around;
    .nav-item {
      margin: 0;
    }
  }
}

.logo {
  @media (max-width: $screen-sm) {
    display: none;
  }
}
</style>
