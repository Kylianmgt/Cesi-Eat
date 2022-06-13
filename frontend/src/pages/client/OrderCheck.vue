<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-text>
        <h1>
          <span class="ml-2">Order summary</span>
        </h1>
      </ion-text>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Your order</span>
          </h2>
        </ion-text>
        <ion-grid>
          <OrderedItemCard
            v-for="order in orders"
            :order="order"
          ></OrderedItemCard>
          <h1>Total : {{ totalCalculation() }}€</h1>
        </ion-grid>
      </ion-content>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Payment method</span>
          </h2>
        </ion-text>
      </ion-content>

      <ion-button>
        <ion-icon name="buy" />
        <span class="ml-2">Buy</span>
      </ion-button>
    </ion-page>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonButton
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";
import OrderedItemCard from "@/components/molecules/orders/OrderedItemCard.vue";

export default {
  name: "OrderCheck",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    IonButton,
    OrderedItemCard
  },
  props: route => ({
    user: userData,
    ...route.params
  }),

  setup() {
    const router = useRouter();
    const route = useRoute();
    const orders = JSON.parse(route.params.orders);
    return {
      router,
      orders
    };
  },
  methods: {
    totalCalculation() {
      var total = 0;
      let res = this.orders;
      console.log(res);
      for (let i in res) {
        console.log(i);
        total += res[i].price * res[i].amount;
        console.log(total);
      }
      return total;
    }
  }
};
</script>
