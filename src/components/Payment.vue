<template>
  <div class="payment">
    <div class="payment__summary">
      <div class="payment__total">
        <span>Total</span>
        <span>{{ amount }}</span>
      </div>
      <button
        class="primary-button--reverse"
        v-if="!purchase"
        @click="openPayment()"
      >
        Checkout
      </button>
    </div>
    <div v-if="purchase">
      <ClientOnly>
        <stripe-elements
          ref="elementsRef"
          :pk="publishableKey"
          :amount="amount"
          locale="auto"
          @token="tokenCreated"
          @loading="loading = $event"
        >
        </stripe-elements>
      </ClientOnly>
      <div class="payment__purchase">
        <button class="primary-button" @click="submit">
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { StripeElements } from 'vue-stripe-checkout';
import axios from 'axios';

export default {
  props: ['items', ' cartOpen'],
  components: {
    // StripeElements,
    StripeElements: () =>
      import('vue-stripe-checkout')
        .then(m => m.StripeElements)
        .catch(),
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
        })
        .catch(error => {
          this.response = 'Error: ' + JSON.stringify(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import '~/styles/variables.scss';

.payment {
  border-top: 2px solid $white;

  .payment__summary {
    padding-top: 1em;
    padding: 0.5em;

    .payment__total {
      display: flex;
      justify-content: space-around;
      font-weight: bold;
      margin-bottom: 0.5em;
    }

    .primary-button--reverse {
      background: #000;
      border: 2px solid #000;
      color: $white;
    }
  }

  .payment__purchase {
    padding: 0.5em;
  }
}

.primary-button,
.primary-button--reverse {
  width: 100%;
}
</style>
