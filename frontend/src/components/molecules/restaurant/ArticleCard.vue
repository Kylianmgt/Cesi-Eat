<template>
  <ion-card>
    <ion-card-header>
      <ion-thumbnail>
        <ion-img :src="data.image"></ion-img>
      </ion-thumbnail>
      <ion-card-title>{{ data.name }}</ion-card-title>
      <ion-card-title>{{ data.price }}€</ion-card-title>
    </ion-card-header>
    <ion-card-content>{{ data.description }}</ion-card-content>
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
    IonCardTitle
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
  setup() {}
});
</script>
