<template>
  <ion-card>
    <ion-button @click="goToRestaurantPage()">
      <ion-card-header>
        <ion-thumbnail>
          <Image
            src="https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg"
          />
          <ion-img
            src="https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg"
          ></ion-img>
        </ion-thumbnail>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>{{ data.name }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </ion-card-content></ion-button
    >
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
    goToRestaurantPage() {
      this.$router.push({
        name: "/client/Restaurant",
        params: {
          data: JSON.stringify(this.data)
        }
      });
    }
  }
});
</script>
