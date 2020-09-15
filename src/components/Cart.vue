<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="cartStatus" class="sidebar__panel">
        <span class="sidebar__close" v-on:click="toggleCart(false)">✖️</span>
        <br />
        <div class="sidebar__header">
          Checkout
        </div>
        <h1 v-if="items.length < 1">Cart is empty</h1>
        <div class="sidebar__body">
          <Shoe
            v-for="item in items"
            :key="item.id"
            :shoe="item"
            :isCart="true"
          />
        </div>

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
  width: 50vw;
  @media (max-width: 986px) {
    width: 90%;
  }
}

.sidebar__header {
  color: #fff;
  font-size: 1.5em;
  border-bottom: 2px solid #fff;
  padding: 1em;
}
.sidebar__body {
  padding: 3rem 20px 2rem 20px;
}

.sidebar__close {
  position: absolute;
  right: 10px;
  top: 20px;
  cursor: pointer;
}

// override shoe card styles
.shoe {
  padding: 0;
  &:hover .shoe__image {
    transform: scale(1);
  }

  .shoe__image {
    max-width: 100px;
    z-index: 100;
  }

  .shoe__image-bubble {
    width: 85px;
    height: 85px;
  }
}
</style>
