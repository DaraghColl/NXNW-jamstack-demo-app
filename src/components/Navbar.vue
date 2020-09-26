<template>
  <header class="header">
    <g-image class="nav__logo" src="/logo.svg" alt="logo" />
    <nav class="nav">
      <g-link class="nav-item" v-scroll-to="'#store'">STORE</g-link>
      <g-link class="nav-item" v-scroll-to="'#contact-section'">CONTACT</g-link>
      <div class="nav__cart-wrapper">
        <g-image
          class="nav-item cart"
          src="/icons/cart.svg"
          alt="cart"
          v-on:click="
            toggleCart(!cartStatus);
            getPoistion($event);
          "
        />
        <span class="cart-items-amount">{{ items.length }}</span>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['cartStatus', 'items']),
  methods: {
    ...mapActions(['toggleCart', 'setCartPosition']),
    getPoistion(event) {
      const position = { x: event.x, y: event.y };
      this.setCartPosition(position);
    },
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
  color: $black;
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
      margin-left: 0;
    }
  }

  .nav__cart-wrapper {
    display: flex;
  }
}

.nav__logo {
  width: 80px;
  @media (max-width: $screen-xs) {
    display: none;
  }
}

.cart-items-amount {
  font-weight: bold;
}
</style>
