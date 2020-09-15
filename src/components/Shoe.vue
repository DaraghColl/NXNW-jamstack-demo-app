<template>
  <div>
    <div class="shoe">
      <div>
        <div class="shoe__image-bubble"></div>
        <g-image :src="shoe.image" :alt="shoe.title" class="shoe__image" />
      </div>
      <div class="shoe__info">
        <h2 class="shoe__title">{{ shoe.title }}</h2>
        <h3 class="shoe__description">{{ shoe.description }}</h3>
        <div class="shoe__info-footer">
          <h4 class="shoe__price">Price: {{ shoe.price }}</h4>
          <button
            class="shoe__button"
            v-on:click="
              addToCart(shoe);
              toast('Item added to cart');
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['shoe'],
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
.shoe {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 1em;

  &:hover .shoe__image {
    transform: scale(1.2);
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .shoe__image {
    max-width: 200px;
    transition: 0.5s;
    position: relative;
    z-index: 100;
  }

  .shoe__image-bubble {
    width: 170px;
    height: 170px;
    background: #5469d4;
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    margin-top: px;
    margin-left: 20px;
  }

  .shoe__title {
    margin-bottom: 0;
  }
  .shoe__description {
    margin-top: 0;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .shoe__title,
    .shoe__description {
      text-align: center;
    }
  }

  .shoe__info-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .shoe__button {
      background: #5469d4;
      color: #fff;
      border: 1px solid #5469d4;
      padding: 0.4em;
      border-radius: 3px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 1em;
    }
  }
}
</style>
