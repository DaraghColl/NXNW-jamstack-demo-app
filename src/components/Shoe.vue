<template>
  <div class="shoe">
    <g-image :src="shoe.image" :alt="shoe.title" class="shoe__image" />
    <div class="shoe__info">
      <h2 class="shoe__title">{{ shoe.title }}</h2>
      <h3 class="shoe__description">{{ shoe.description }}</h3>
      <div class="shoe__info-footer">
        <h4 class="shoe__price">Price: {{ shoe.price }}</h4>
        <button class="shoe__add">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['shoe'],
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

  .shoe__image {
    max-width: 150px;
  }

  .shoe__title {
    margin-bottom: 0;
  }
  .shoe__description {
    margin-top: 0;
  }

  .shoe__info-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .shoe__add {
      background: #0d47a1;
      color: #fff;
      border: 1px solid #0d47a1;
      padding: 0.5em;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>
