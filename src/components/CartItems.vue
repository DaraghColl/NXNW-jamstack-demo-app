<template>
  <div class="item">
    <div>
      <div class="item__image-bubble"></div>
      <g-image :src="item.image" :alt="item.title" class="item__image" />
    </div>
    <div class="item__info">
      <h2 class="item__title">{{ item.title }}</h2>
      <h4 class="item__price">Price: {{ item.price }}</h4>

      <button
        class="item__button"
        v-on:click="
          removeFromCart(item);
          toast('Item removed from cart');
        "
      >
        Remove from Cart
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
      this.$toast(message);
    },
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;
  border-radius: 5px;
  padding: 0.5em;

  .item__image {
    max-width: 100px;
    transition: 0.5s;
    position: relative;
    z-index: 100;
  }

  .item__image-bubble {
    width: 80px;
    height: 80px;
    background: #fff;
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    margin-top: px;
    margin-left: 20px;
  }

  .item__title {
    margin: auto 0;
    font-size: 1em;
    color: #fff;
  }

  .item__price {
    margin: 0;
    font-weight: 600;
    font-size: 0.8em;
    color: #fff;
  }

  .item__button {
    background: #fff;
    color: #5469d4;
    border: 1px solid #fff;
    padding: 0.4em;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 0.3em;
  }
}
</style>
