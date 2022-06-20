<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{{ order.id }}</ion-card-subtitle>
      <ion-card-subtitle>{{ order.status }}</ion-card-subtitle>
      <ion-card-title>Order</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-button
          @click="actions[userData.user.role][order.status].action()"
          >{{ actions[userData.user.role][order.status].title }}</ion-button
        >
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
  IonList,
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
    IonButton,
    IonList,
  },
  data: function () {
    const actions = {
      client: {
        pending: {
          title: "Marker Order As Done",
          action: () => this.markOrderAsDone(),
        },
        accepted: {
          title: "",
          action: {},
        },
        deliver: { title: "", action: {} },
        done: { title: "", action: {} },
      },
      delivery: {
        pending: {
          title: "Assign Order",
          action: () => this.assignOrderToDelivery(),
        },
        accepted: {
          title: "Declare taken from restaurant",
          action: () => this.markOrderAsTaken(),
        },
        deliver: {
          title: "Mark Order As Done",
          action: () => this.markOrderAsDone(),
        },
        done: {
          title: "La commande est livrée",
          action: () => this.markOrderAsDone(),
        },
      },
      restaurant: {
        pending: { title: "", action: {} },
        accepted: {
          title: "",
          action: {},
        },
        deliver: { title: "", action: {} },
        done: { title: "", action: {} },
      },
    };

    return {
      actions,
    };
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

    return {
      router,
    };
  },
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
  methods: {
    goToOrder() {
      return;
    },
    assignOrderToDelivery() {
      this.$socket.emit("assignDelivery", {
        orderId: this.order.id,
        deliveryId: this.userData.profil.id,
      });
    },
    markOrderAsTaken() {
      this.$socket.emit("markOrderAsTaken", {
        orderId: this.order.id,
      });
    },
    markOrderAsDone() {
      this.$socket.emit("markOrderAsDone", {
        orderId: this.order.id,
      });
    },
    fetchOrders() {
      this.$store.dispatch("user/getUserOrders", this.userData.user.id);
    },
  },
  mounted() {},
});
</script>
