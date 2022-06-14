<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{{ order.id }}</ion-card-subtitle>
      <ion-card-subtitle>{{ order.status }}</ion-card-subtitle>
      <ion-card-title>Order</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
      <ion-list>
        <ion-button>{{
          actions[userData.user.role][order.status].title
        }}</ion-button>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonIcon,
  IonThumbnail,
  IonImg,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/vue";

import Image from "../../Image.vue";
import { useRouter } from "vue-router";
import { mapActions, useStore, mapState } from "vuex";

export default defineComponent({
  components: {
    IonIcon,
    IonLabel,
    IonThumbnail,
    IonImg,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    Image,
  },
  computed: mapState({
    userData: (state) => state.user.userData,
  }),
  props: {
    order: {
      type: Object,
      required: false,
    },
    className: {
      type: String,
      required: false,
    },
  },
  setup() {
    const router = useRouter();
    const actions = {
      client: {
        pending: { title: "Salut", action: {} },
        accepted: { title: "", action: {} },
        deliver: { title: "", action: {} },
        done: { title: "", action: {} },
      },
      delivery: {
        pending: { title: "", action: {} },
        accepted: { title: "", action: {} },
        deliver: { title: "", action: {} },
        done: { title: "", action: {} },
      },
      restaurant: {
        pending: { title: "", action: {} },
        accepted: { title: "", action: {} },
        deliver: { title: "", action: {} },
        done: { title: "", action: {} },
      },
    };
    return {
      router,
      actions,
    };
  },
  methods: {
    goToOrder() {
      console.log("goToRestaurantPage");
      // this.$router.push({
      //   name: "RestaurantPage",
      //   params: {
      //     id: this.data.id
      //   }
      // });
    },
    assignOrderToDelivery() {
      this.$socket.emit("assignDelivery", {
        orderId: this.order.id,
        deliveryId: this.userData.user.id,
      });
    },
    // markOrderAsTaken() {
    //   this.$socket.emit("markOrderAsTaken", {
    //     orderId: this.order.id,
    //     deliveryId: this.userData.user.id,
    //   });
    // },
    markOrderAsDone() {
      this.$socket.emit("markOrderAsDone", {
        orderId: this.order.id,
        deliveryId: this.userData.user.id,
      });
    },
    fetchOrders() {
      return this.$store.dispatch("user/getUserOrders", this.userData.user.id);
    },
  },
});
</script>
