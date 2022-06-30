<style>
.order-delivery-img {
  width: 100px;
  height: 100px;
}
</style>

<template>
  <ion-card :class="bgColors[order.status]" class="w-full">
    <ion-card-header>
      <ion-img
        v-if="order.restaurant.image"
        :src="order.restaurant.image"
        class=".order-delivery-img"
      >
      </ion-img>
      <ion-card-title class="text-2xl font-bold">{{
        order.restaurant.name
      }}</ion-card-title>

      <ion-card-subtitle>Order n°{{ order.id }}</ion-card-subtitle>
      <ion-card-subtitle>Status : {{ order.status }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content :class="bgColors[order.status]">
      <ion-grid>
        <ion-row
          v-if="order.delivery"
          class="flex align-left justify-left border-2 rounded-lg"
        >
          <ion-img
            v-if="order.delivery"
            :src="order.delivery.image"
            class="order-delivery-img rounded-full"
          ></ion-img>
          <ion-item class="flex justify-center">
            <ion-text class="text-black ion-text-center" v-if="order.delivery"
              >{{ order.delivery.name }} {{ order.delivery.firstName }} is your
              delivery for this order
            </ion-text>
          </ion-item>
        </ion-row>
      </ion-grid>
      <ion-list
        :class="bgColors[order.status]"
        v-if="actions[userData.user.role][order.status].title !== ''"
      >
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
  IonRow,
  IonGrid,
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
    IonGrid,
    IonRow,
  },
  data: function () {
    const actions = {
      client: {
        pending: {
          title: "",
          action: () => {
            return;
          },
        },
        restaurantAccepted: {
          title: "",
          action: () => {
            return;
          },
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
          title: "",
          action: () => {
            return;
          },
        },
        restaurantAccepted: {
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
          title: "",
          action: () => {
            return;
          },
        },
      },
      restaurant: {
        pending: {
          title: "Accept Order",
          action: () => this.acceptOrderAsRestaurant(),
        },
        accepted: {
          title: "",
          action: {},
        },
        restaurantAccepted: {
          title: "",
          action: () => {
            return;
          },
        },
        deliver: { title: "", action: {} },
        done: { title: "", action: {} },
      },
    };

    const bgColors = {
      pending: "bg-gray-200",
      accepted: "bg-green-200",
      deliver: "bg-blue-200",
      done: "bg-green-200",
    };

    return {
      actions,
      bgColors,
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
    acceptOrderAsRestaurant() {
      this.$socket.emit("restaurantAccepted", {
        orderId: this.order.id,
      });
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
