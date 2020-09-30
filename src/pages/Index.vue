<template>
  <Layout>
    <div ref="cover" class="landing-cover"></div>
    <Cart />
    <!-- store -->
    <h1 class="heading">Store</h1>
    <div class="grid">
      <Shoe
        v-for="product in $page.allProduct.edges"
        :key="product.id"
        :shoe="product.node"
        id="store"
      />
    </div>

    <!-- contact -->
    <Contact />
  </Layout>
</template>

<script>
import Shoe from '~/components/Shoe.vue';
import Contact from '~/components/Contact.vue';
import Cart from '~/components/Cart.vue';

export default {
  components: {
    Shoe,
    Contact,
    Cart,
  },
  mounted() {
    const { cover } = this.$refs;
    setTimeout(() => {
      cover.classList.add('animate-up');
    }, 100);
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>

<page-query>
query product {
  allProduct {
    edges {
      node {
        id,
        title,
        description,
        image (width: 600, height: 474, quality: 75),
        price
      }
    }
  }
}
</page-query>

<style lang="scss">
@import '~/styles/variables.scss';

.home-links a {
  margin-right: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media (max-width: $screen-md) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.heading {
  text-align: center;
  font-size: 2em;
}

.toasted-container .toasted {
  font-weight: bold;
  line-height: 2em;
  font-size: 20px;
  border-radius: $border-medium;
}

.landing-cover {
  z-index: 2000;
  position: absolute;
  background: $primary;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 1.5s;
}

.animate-up {
  height: 0vh;
  transition: 1.5s;
}
</style>
