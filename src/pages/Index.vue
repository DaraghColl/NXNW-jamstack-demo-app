<template>
  <Layout>
    <g-image alt="Example image" src="~/assets/img/favicon.png" width="135" />

    <div v-for="product in $page.allProduct.edges" :key="product.id">
      <h1>{{ product.node.title }}</h1>
      <!-- <g-image
        class="project__img"
        :src="product.node.image"
        alt="project image"
      /> -->
    </div>
  </Layout>
</template>

<script>
export default {
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
</style>
