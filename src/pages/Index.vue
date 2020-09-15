<template>
  <Layout>
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
  metaInfo: {
    title: 'Hello, world!',
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
        image,
        price
      }
    }
  }
}
</page-query>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media (max-width: 978px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.heading {
  text-align: center;
  font-size: 2em;
}
</style>
