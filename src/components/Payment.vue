<template>
  <div class="payment">
    <div class="payment__summary">
      <div class="payment__total">
        <span>Total</span>
        <span>{{ amount }}</span>
      </div>
      <button
        class="payment__checkout-button"
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
import axios from 'axios';

export default {
  props: ['items', ' cartOpen'],
  components: {
    StripeElements: () =>
      import('vue-stripe-checkout')
        .then(m => m.StripeElements)
        .catch(),
  },
  data: () => ({
    loading: false,
    amount: 1000,
    publishableKey: process.env.GRIDSOME_STRIPE_PUB,
    token: null,
    charge: null,
    purchase: false,
  }),
  mounted() {
    console.log(this.publishableKey);
  },
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

    .payment__checkout-button {
      background: $black;
      border: 2px solid $black;
      color: $white;
      border-radius: $border-medium;
      padding: 0.4em;
      min-width: 100px;
      font-weight: bold;
      transition: 0.3s;
      width: 100%;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  .payment__purchase {
    padding: 0.5em;
  }
}

.primary-button {
  width: 100%;
}
</style>
