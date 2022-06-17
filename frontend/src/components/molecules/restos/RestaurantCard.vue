<template>
  <ion-card @click="goToRestaurantPage()">
    <ion-card-header>
      <ion-thumbnail class="card-image-container">
        <Image
          src="https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg"
        />
      </ion-thumbnail>
      <ion-card-subtitle class="card-subtitle">Card Subtitle</ion-card-subtitle>
      <ion-card-title class="card-title">{{ data.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content class="text-sm">
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
  IonLabel,
} from "@ionic/vue";

import Image from "../../Image.vue";
import { useRouter, useRoute } from "vue-router";

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
  props: {
    data: {
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
  },
  methods: {
    goToRestaurantPage() {
      this.$router.push({
        name: "Restaurant",
        params: {
          data: JSON.stringify(this.data),
        },
      });
    },
  },
});
</script>

<style scoped>
.card-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-image-container {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--ion-color-primary);
}
.card-subtitle {
  font-size: 1.2rem;
  color: var(--ion-color-medium);
}
.card-description {
  font-size: 1.2rem;
  color: var(--ion-color-medium);
}
.card-button {
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
.card-button:hover {
  background-color: #000;
  color: #fff;
}
.card-button:active {
  background-color: #000;
  color: #fff;
}
.card-button:focus {
  background-color: #000;
  color: #fff;
}
</style>
