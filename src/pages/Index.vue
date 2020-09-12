<template>
  <Layout>
    <div class="grid">
      <Shoe
        v-for="product in $page.allProduct.edges"
        :key="product.id"
        :shoe="product.node"
      />
    </div>
  </Layout>
</template>

<script>
import Shoe from '~/components/Shoe.vue';

export default {
  components: {
    Shoe,
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
        title,
        description,
        image,
        price
      }
    }
  }
}
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  @media (max-width: 796px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
