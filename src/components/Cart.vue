<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="cartStatus" class="sidebar__panel">
        <div class="sidebar__header">
          <h4>Your Items</h4>
          <span class="sidebar__close" v-on:click="toggleCart(false)">✖️</span>
        </div>
        <div class="sidebar__body">
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
        <h1 class="cart-empty" v-else>
          Cart is Empty
        </h1>
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar__panel {
  overflow-y: auto;
  background-color: #5469d4;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 30vw;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
}

.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 2px solid #fff;

  h4 {
    color: #fff;
  }
  .sidebar__close {
    cursor: pointer;
  }
}

.sidebar__body {
  min-height: 50px;
}

.cart-empty {
  color: #fff;
  text-align: center;
}
</style>
