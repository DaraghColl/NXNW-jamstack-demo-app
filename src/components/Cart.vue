<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="cartStatus" class="sidebar-panel">
        <span class="sidebar__close" v-on:click="toggleCart(false)">✖️</span>
        <h1 v-if="items.length < 1">Cart is empty</h1>
        <Shoe
          v-for="item in items"
          :key="item.id"
          :shoe="item"
          :isCart="true"
        />

        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Shoe from '~/components/Shoe.vue';

export default {
  components: {
    Shoe,
  },
  computed: mapGetters(['items', 'cartStatus']),
  methods: {
    ...mapActions(['toggleCart']),
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

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #0d47a1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 50vw;
  @media (max-width: 986px) {
    width: 90%;
  }
}

.sidebar__close {
  position: absolute;
  right: 10px;
  top: 20px;
  cursor: pointer;
}
</style>
