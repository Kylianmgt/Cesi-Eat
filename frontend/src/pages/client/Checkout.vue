<template>
  // Language: vue // Path: frontend\src\pages\client\Checkout.vue //Create a
  Stripe checkout page:
  <ion-page>
    <ion-content> </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    console.log("test");
    return {
      stripe: "",
    };
  },
  methods: {
    stripePayment() {
      this.$stripe.createToken(this.$refs.card).then(function (result) {
        if (result.error) {
          console.log("Something is wrong:", result.error);
        } else {
          console.log("Success!", result.token);
        }
      });
    },
  },
};
</script>
