<template>
  <div class="item">
    <g-image :src="item.image" :alt="item.title" class="item__image" />

    <div class="item__info">
      <h2 class="item__title">{{ item.title }}</h2>
      <h4 class="item__price">Price: {{ item.price }}</h4>

      <button
        class="primary-button"
        v-on:click="
          removeFromCart(item);
          toast('Item removed from cart');
        "
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['item'],
  computed: mapGetters(['items', 'cartStatus']),
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
    toast(message) {
      this.$toasted.show(message);
    },
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5em;
  border-radius: $border-medium;
  padding: 0.5em;

  .item__image {
    max-width: 80px;
    transition: 0.5s;
    position: relative;
    z-index: 100;
    margin-top: 10px;
  }

  .item__title {
    margin: auto 0;
    font-size: 1em;
    color: #656262;
  }

  .item__price {
    margin: 0;
    font-weight: 600;
    font-size: 0.8em;
    color: #656262;
  }

  .primary-button {
    padding: 0.2em;
  }
}
</style>
