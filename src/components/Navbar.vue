<template>
  <header class="header">
    <strong>
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
    border-bottom: 4px solid #0d47a1;
    transition: 0.5s;
    cursor: pointer;
  }
}

.nav {
  display: flex;
  align-items: center;
}
</style>
