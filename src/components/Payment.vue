<template>
  <div class="stripe">
    <div class="sidebar__footer__total">
      <h4>Total</h4>
      <h4>65</h4>
    </div>
    <div class="sidebar__footer">
      <div class="btn-wrapper">
        <button class="btn" @click="openPayment()">
          Checkout
        </button>
      </div>
    </div>
    <div v-if="purchase">
      <stripe-elements
        ref="elementsRef"
        :pk="publishableKey"
        :amount="amount"
        locale="auto"
        @token="tokenCreated"
        @loading="loading = $event"
      >
      </stripe-elements>
      <div class="btn-wrapper">
        <button class="btn" @click="submit">
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { StripeElements } from 'vue-stripe-checkout';
import axios from 'axios';

export default {
  props: ['items', ' cartOpen'],
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
    purchase: false,
  }),
  methods: {
    openPayment() {
      this.purchase = true;
    },
    submit() {
      this.$refs.elementsRef.submit();
    },

    tokenCreated(token) {
      this.token = token;
      console.log(this.token);
      this.charge = {
        source: 'tok_us',
        amount: 1200,
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
<style lang="scss">
.stripe {
  border-top: 2px solid #fff;
  padding: 1.5em;
}

.sidebar__footer__total {
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  color: #fff;
}

.sidebar__footer {
  padding: 0 20px;
}

.btn-wrapper {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2em;
}

.btn {
  background: #fff;
  width: 200px;
  color: #5469d4;
  border: 1px solid #fff;
  padding: 0.4em;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.3em;
}
</style>
