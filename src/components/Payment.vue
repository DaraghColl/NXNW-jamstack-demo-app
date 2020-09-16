<template>
  <div>
    <stripe-elements
      ref="elementsRef"
      :pk="publishableKey"
      :amount="amount"
      locale="auto"
      @token="tokenCreated"
      @loading="loading = $event"
    >
    </stripe-elements>
    <button @click="submit">Pay ${{ amount / 100 }}</button>
  </div>
</template>

<script>
import { StripeElements } from 'vue-stripe-checkout';
import axios from 'axios';

export default {
  components: {
    StripeElements,
  },
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey:
      'pk_test_51HRkVxKXiyesRv3EBhW0ssXLnm1BHwXzZgwVq0twmuKi8oCGY7SUO2gsGPtHekK25dYj0G0kiZAH3X4kL6oP5ndE00188fSOOX',
    token: null,
    charge: null,
  }),
  methods: {
    submit() {
      this.$refs.elementsRef.submit();
    },

    tokenCreated(token) {
      this.token = token;
      console.log(this.token);
      this.charge = {
        source: 'tok_us',
        amount: 1000,
        description: 'testing charge',
      };
      this.sendTokenToServer(this.charge);
    },
    sendTokenToServer(charge) {
      axios
        .post('/.netlify/functions/checkout', charge, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          this.response = JSON.stringify(response);
          console.log(this.response);
        })
        .catch(error => {
          this.response = 'Error: ' + JSON.stringify(error);
          console.log(this.response);
        });
    },
  },
};
</script>
<style></style>
