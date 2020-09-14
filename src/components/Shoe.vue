<template>
  <div class="shoe">
    <g-image :src="shoe.image" :alt="shoe.title" class="shoe__image" />
    <div class="shoe__info">
      <h2 class="shoe__title">{{ shoe.title }}</h2>
      <h3 class="shoe__description">{{ shoe.description }}</h3>
      <div class="shoe__info-footer">
        <h4 class="shoe__price">Price: {{ shoe.price }}</h4>
        <button class="shoe__add" v-on:click="addToCart(shoe)">
          Add to Cart
        </button>
        <button class="shoe__add" v-on:click="removeFromCart(shoe)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['shoe'],
  computed: mapGetters(['items']),
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
  },
};
</script>

<style lang="scss">
.shoe {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 1em;

  &:hover .shoe__image {
    transform: scale(1.3);
    transition: 0.5s;
  }

  .shoe__image {
    max-width: 150px;
    transition: 0.5s;
  }

  .shoe__title {
    margin-bottom: 0;
  }
  .shoe__description {
    margin-top: 0;
    font-weight: 600;
  }

  .shoe__info-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .shoe__add {
      background: #0d47a1;
      color: #fff;
      border: 1px solid #0d47a1;
      padding: 0.4em;
      border-radius: 3px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 1em;
    }
  }
}
</style>
