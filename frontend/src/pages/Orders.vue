<template>
  <base-layout :show-menu-button="false" :showHeader="false">
    <ion-page>
      <ion-content>
        <ion-text class="text-center">
          <h1>
            <span class="text-4xl">My orders</span>
          </h1>
        </ion-text>
        <ion-list v-if="userData.user.role == 'delivery'">
          <ion-text class="text-center">
            <h2>
              <span class="text-2xl ml-2">PendingOrders</span>
            </h2>
          </ion-text>
          <ion-list>
            <ion-item v-for="pendingOrder in pendingOrders">
              <OrderCard v-bind:order="pendingOrder"></OrderCard>
            </ion-item>
          </ion-list>
        </ion-list>
        <ion-text class="text-center">
          <h2>
            <span class="text-2xl ml-2">Your actual orders</span>
          </h2>
        </ion-text>
        <ion-list>
          <ion-item v-for="order in userOrders">
            <OrderCard
              v-bind:order="order"
              v-if="order.status != 'done'"
            ></OrderCard>
          </ion-item>
        </ion-list>
        <ion-text class="text-center">
          <h2>
            <span class="text-2xl ml-2">Your previous orders</span>
          </h2>
        </ion-text>
        <ion-list>
          <ion-item v-for="order in userOrders">
            <OrderCard
              v-bind:order="order"
              v-if="order.status == 'done'"
            ></OrderCard>
          </ion-item>
        </ion-list>
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
    if (this.userData.user.role == "delivery") {
      this.fetchPendingOrders();
    }
  },
  computed: mapState({
    userOrders: (state) => state.user.userOrders,
    userData: (state) => state.user.userData,
    pendingOrders: (state) => state.user.pendingOrders,
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
    ordersupdated: function () {
      this.fetchOrders();
      if (this.userData.user.role == "delivery") {
        this.fetchPendingOrders();
      }
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
    fetchPendingOrders() {
      this.$store.dispatch("user/getPendingOrders");
      console.log(this.$store.state.user.pendingOrders);
    },
  },
};
</script>
