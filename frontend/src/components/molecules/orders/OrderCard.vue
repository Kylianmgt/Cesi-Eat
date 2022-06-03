<template>
  <ion-card :click="goToRestaurantPage()">
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Order</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile, and
      climb a mountain or spend a week in the woods. Wash your spirit clean.
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
  IonLabel
} from "@ionic/vue";

import Image from "../../Image.vue";
import { useRouter } from "vue-router";

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
    Image
  },
  props: {
    data: {
      type: Object,
      required: false
    },
    className: {
      type: String,
      required: false
    }
  },
  setup() {
    const router = useRouter();
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
    }
  }
});
</script>
