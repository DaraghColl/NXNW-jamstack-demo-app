<template>
  <div ref="card" class="shoe">
    <div>
      <div class="shoe__image-bubble"></div>
      <g-image :src="shoe.image" :alt="shoe.title" class="shoe__image" />
    </div>
    <div class="shoe__info">
      <h2 class="shoe__title">{{ shoe.title }}</h2>
      <!-- <h3 class="shoe__description">{{ shoe.description }}</h3> -->
      <div class="shoe__info-footer">
        <span class="shoe__price">Price: {{ shoe.price }}</span>
        <button class="primary-button" v-on:click="addItemToCart(shoe)">
          Add to Cart
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
    addItemToCart(item) {
      this.$store.dispatch('addToCart', item).then(res => {
        if (res === true) {
          this.toast('Item added to cart');
        } else if (res === false) {
          this.toast('Item already added to cart');
        }
      });
    },
    toast(message) {
      this.$toasted.show(message);
    },
  },
  mounted() {
    const { card } = this.$refs;
    setTimeout(() => {
      card.classList.add('fade-down');
    }, 400);
  },
};
</script>

<style lang="scss">
@import '~/styles/variables.scss';

.shoe {
  transform: translateY(-500px);
  transition: 1.5s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;
  background: $white;
  box-shadow: $shadow;
  border-radius: $border-medium;
  padding: 1em;

  &:hover .shoe__image {
    transform: scale(1.2);
    transition: 0.5s;
  }

  @media (max-width: $screen-sm) {
    flex-direction: column;
  }

  .shoe__image {
    max-width: 180px;
    transition: 0.5s;
    position: relative;
    z-index: 100;
  }

  .shoe__image-bubble {
    width: 153px;
    height: 153px;
    background: $primary;
    position: absolute;
    border-radius: 50%;
    z-index: 1;
    margin-left: 15px;
  }

  .shoe__title {
    margin-bottom: 0.5em;
    text-align: center;
  }

  .shoe__price {
    margin-right: 0.4em;
    font-weight: bold;
  }

  @media (max-width: $screen-sm) {
    .shoe__title,
    .shoe__description {
      text-align: center;
    }
  }

  .shoe__info-footer {
    display: flex;
    align-items: center;

    @media (max-width: $screen-sm) {
      flex-direction: column;
      .shoe__price {
        margin: 0 0 10px 0;
      }
    }
  }
}

.fade-down {
  transform: translateY(0);
  transition: 1s;
}
</style>
