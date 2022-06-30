<template>
  <base-layout :show-menu-button="false" :showHeader="false">
    <ion-page>
      <ion-content>
        <ion-text class="text-center">
          <h1>
            <span class="text-4xl">My orders</span>
          </h1>
        </ion-text>
        <ion-list>
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
            <OrderCard v-bind:order="order" v-if="order.status != 'done'"></OrderCard>
          </ion-item>
        </ion-list>
        <ion-text class="text-center">
          <h2>
            <span class="text-2xl ml-2">Your previous orders</span>
          </h2>
        </ion-text>
        <ion-list>
          <ion-item v-for="order in userOrders">
            <OrderCard v-bind:order="order" v-if="order.status == 'done'"></OrderCard>
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
import login from "../composition/login";
import { Storage } from "@capacitor/storage";

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
  beforeMount() {
    const store = useStore();
    if (!store.state.user.userData.user) {
      const data = Storage.get({ key: "userCredentials" }).then((response) => {
        const userCredentials = JSON.parse(response.value);
        this.userLogin(userCredentials).then((response) => {
          this.router.push("/orders");
          this.fetchOrders();
          this.fetchPendingOrders();
        });
      });
    }
  },
  mounted() {
    this.fetchOrders();
    this.fetchPendingOrders();
  },
  ionViewWillEnter() {
    this.fetchOrders();
    this.fetchPendingOrders();
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
    const { userLogin } = login();
    return {
      router,
      userLogin,
      router,
    };
  },
  methods: {
    fetchOrders() {
      this.$store.dispatch(
        "user/getUserOrders",
        this.$store.state.user.userData.user.id
      );
    },
    fetchPendingOrders() {
      if (this.$store.state.user.userData.user.role == "delivery") {
        this.$store.dispatch("user/getPendingOrders");
      }
    },
    async getUserCredentials() {
      const userCredentials = await Storage.get({ key: "userCredentials" });
      return JSON.parse(userCredentials.value);
    },

  },
};
</script>
