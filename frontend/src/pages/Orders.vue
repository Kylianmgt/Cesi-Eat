<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-content>
        <ion-text>
          {{ userData }}
          <h1>
            <span class="ml-2">Order summary</span>
          </h1>
        </ion-text>
        <ion-list>
          <ion-item v-for="order in userOrders">
            <OrderCard v-bind:order="order"></OrderCard>
            {{ userOrders }}
          </ion-item>
        </ion-list>
      </ion-content>

      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Your actual orders</span>
          </h2>
        </ion-text>
      </ion-content>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Your previous orders</span>
          </h2>
        </ion-text>
      </ion-content>
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
  IonButton,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import OrderCard from "../components/molecules/orders/OrderCard.vue";
import { mapActions, useStore, mapState } from "vuex";

export default {
  name: "Orders",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    IonButton,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    OrderCard,
  },
  mounted() {
    this.fetchOrders();
  },
  computed: mapState({
    userOrders: (state) => state.user.userOrders,
    userData: (state) => state.user.userData,
  }),
  sockets: {
    connect: function () {
      console.log("connected");
    },
    disconnect: function () {
      console.log("socket to notification channel disconnected");
    },
    update: function (data) {
      console.log("socket to notification channel updated");
    },
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    // const userData = store.state.user.userData;
    // const fetchOrdersActions = {...mapActions{"client", ["getClientOrders"]}, ...mapActions{"delivery", ["getDeliveryOrders"]}, ...mapActions{"restaurant", ["getRestaurantOrders"]}};

    return {
      router,
      // userData,
    };
  },
  methods: {
    fetchOrders() {
      this.$store.dispatch("user/getUserOrders", this.userData.user.id);
    },
  },
};
</script>
