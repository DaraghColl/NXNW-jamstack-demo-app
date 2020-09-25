<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="cartStatus" class="sidebar__panel">
        <div class="sidebar__header">
          <span class="sidebar__items">Items {{ items.length }}</span>
          <g-image
            class="sidebar__close"
            src="/icons/close.svg"
            alt="close cart"
            v-on:click="toggleCart(false)"
          />
        </div>
        <div class="sidebar__body" v-if="items.length">
          <CartItems
            v-for="item in items"
            :key="item.id"
            :item="item"
            :isCart="true"
          />
        </div>
        <div v-if="items.length">
          <Payment :items="items" :cartOpen="cartStatus" />
        </div>
        <h4 class="cart-empty" v-if="!items.length">
          Cart is Empty
        </h4>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Shoe from '~/components/Shoe.vue';
import CartItems from '~/components/CartItems.vue';
import Payment from '~/components/Payment.vue';

export default {
  components: {
    CartItems,
    Payment,
  },
  computed: mapGetters(['items', 'cartStatus']),
  methods: {
    ...mapActions(['toggleCart']),
    total() {
      items.forEach(element => {
        let total;
        total = total + element.price;
        return total;
      });
    },
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}

.sidebar__panel {
  overflow-y: auto;
  background-color: $white;
  box-shadow: -1px -1px 14px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: absolute;
  right: 100px;
  top: 60px;
  z-index: 4000;
  width: 300px;
  padding-bottom: 1em;

  @media (max-width: $screen-sm) {
    right: 5%;
    left: 5%;
    width: 90%;
  }
}

.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-bottom: 2px solid $grey_lightest;

  .sidebar__items {
    font-weight: bold;
  }

  h4 {
    color: #000;
    margin: 0;
  }
  .sidebar__close {
    cursor: pointer;
  }
}

.sidebar__body {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid $grey_lightest;
}

.cart-empty {
  color: #000;
  text-align: center;
}
</style>
